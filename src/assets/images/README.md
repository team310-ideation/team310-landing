# Team 310 Image Assets

Put source images here before optimization. Original team photos are intentionally ignored by git; commit only optimized web-ready assets.

## Team

Suggested filenames:

```text
src/assets/images/team/originals/team310-group-portrait-original.jpg
src/assets/images/team/originals/sejong-landscape-01-original.jpg
src/assets/images/team/originals/sejong-portrait-01-original.jpg
src/assets/images/team/originals/junhyeok-landscape-01-original.jpg
src/assets/images/team/originals/junhyeok-portrait-01-original.jpg
src/assets/images/team/originals/semin-landscape-01-original.jpg
src/assets/images/team/originals/semin-portrait-01-original.jpg
```

## Mentors

Suggested filenames:

```text
src/assets/images/mentors/mentor-jaehong.jpg
src/assets/images/mentors/mentor-sehwan.jpg
src/assets/images/mentors/mentor-soonyup.jpg
```

## Size Guide

- Group photo: 2400x1600 or 2400x1350+
- Member landscape: 1800x1200+
- Member portrait: 1200x1500 or 1200x1600+
- Mentor profile: 1200x1500 or 1200x1200+

Use original `jpg`/`png` files here. Web-ready `webp` versions can be generated later.

Generate optimized team images:

```bash
npm run images:team
```
