import { ExternalLink } from "lucide-react";
import { teamVideos } from "../data/landingContent";
import Reveal from "./Reveal";

export default function TeamVideoSection() {
  return (
    <section className="section team-video-section" id="videos" aria-labelledby="videos-title">
      <div className="container">
        <Reveal className="section-intro">
          <p className="eyebrow">Team 310 video</p>
          <h2 id="videos-title">Team 310의 문제해결 과정을 영상으로 남기고 있습니다</h2>
        </Reveal>

        <div className="video-grid">
          {teamVideos.map((video, index) => (
            <Reveal className="video-card" key={video.embedUrl} delay={index * 0.04}>
              <div className="video-frame">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="video-copy">
                <div>
                  <h3>{video.title}</h3>
                  <p>{video.subtitle}</p>
                </div>
                <a href={video.watchUrl} target="_blank" rel="noreferrer" aria-label={`${video.title} 유튜브에서 보기`}>
                  <ExternalLink size={18} aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
