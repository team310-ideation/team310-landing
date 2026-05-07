import { ExternalLink, MapPin, Navigation, Train } from "lucide-react";
import { useEffect, useRef } from "react";
import { offlineLocation } from "../data/landingContent";
import Reveal from "./Reveal";

function KakaoRoughMap({ roughMap }) {
  const hasRenderedRef = useRef(false);
  const containerId = `daumRoughmapContainer${roughMap.timestamp}`;

  useEffect(() => {
    const config = {
      phase: "prod",
      cdn: "207038f2_1774248312945",
      URL_KEY_DATA_LOAD_PRE: "https://t1.kakaocdn.net/roughmap/",
      url_protocal: "https:",
      url_cdn_domain: "//t1.kakaocdn.net",
    };

    const renderMap = () => {
      if (hasRenderedRef.current || !window.daum?.roughmap?.Lander) {
        return;
      }

      const mapRoot = document.getElementById(containerId);
      if (!mapRoot) {
        return;
      }

      hasRenderedRef.current = true;
      new window.daum.roughmap.Lander({
        timestamp: roughMap.timestamp,
        key: roughMap.key,
        mapWidth: "100%",
        mapHeight: "320",
      }).render();
    };

    window.daum = window.daum || {};
    window.daum.roughmap = window.daum.roughmap || config;

    if (window.daum.roughmap.Lander) {
      renderMap();
      return undefined;
    }

    const scriptSrc =
      "https://t1.kakaocdn.net/kakaomapweb/roughmap/place/prod/207038f2_1774248312945/roughmapLander.js";
    let script = document.querySelector(`script[src="${scriptSrc}"]`);

    if (!script) {
      script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.charset = "UTF-8";
      document.body.appendChild(script);
    }

    script.addEventListener("load", renderMap);

    return () => {
      script.removeEventListener("load", renderMap);
    };
  }, [containerId, roughMap.key, roughMap.timestamp]);

  return (
    <div
      id={containerId}
      className="kakao-map-root root_daum_roughmap root_daum_roughmap_landing"
      aria-label={`${offlineLocation.name} 카카오맵`}
    />
  );
}

export default function OfflineLocationSection() {
  return (
    <section className="location-section" aria-labelledby="offline-location-title">
      <Reveal className="container location-panel" delay={0.08}>
        <div className="location-copy">
          <span className="location-badge">
            <MapPin size={17} aria-hidden="true" />
            {offlineLocation.title}
          </span>
          <h3 id="offline-location-title">{offlineLocation.name}</h3>
          {offlineLocation.note ? <p>{offlineLocation.note}</p> : null}

          <dl className="location-detail-list">
            <div>
              <dt>주소</dt>
              <dd>{offlineLocation.address}</dd>
            </div>
            <div>
              <dt>우편번호</dt>
              <dd>{offlineLocation.postalCode}</dd>
            </div>
            <div>
              <dt>대중교통</dt>
              <dd>{offlineLocation.transit}</dd>
            </div>
          </dl>

          <div className="location-action-row">
            <a
              className="button primary-button"
              href={offlineLocation.kakaoRouteUrl}
              target="_blank"
              rel="noreferrer"
            >
              카카오맵 길찾기
              <Navigation size={18} aria-hidden="true" />
            </a>
            <a
              className="button secondary-light-button"
              href={offlineLocation.kakaoMapUrl}
              target="_blank"
              rel="noreferrer"
            >
              지도에서 보기
              <ExternalLink size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="location-map-panel">
          <div className="location-map-toolbar">
            <span>
              <Train size={17} aria-hidden="true" />
              공덕역 1번 출구 기준
            </span>
            <a href={offlineLocation.kakaoMapUrl} target="_blank" rel="noreferrer">
              카카오맵 열기
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          </div>
          <KakaoRoughMap roughMap={offlineLocation.roughMap} />
        </div>
      </Reveal>
    </section>
  );
}
