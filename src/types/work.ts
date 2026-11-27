import type { StaticImageData } from "next/image";

export interface WorkItem {
  w_img: StaticImageData;
  w_title: string;
  w_link: string;
  isLive?: boolean;
}
