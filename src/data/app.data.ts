import { CourseInterface } from "../types";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export interface AppAtomI {
  courses: CourseInterface[];
}

export const appAtom = atom<AppAtomI>({
  key: `data`,
  default: {
    courses: [
      {
        thumbnail:
          "https://www.ncertbooks.guru/wp-content/uploads/2022/05/Course-details.png",
        description:
          "Learning culture is a strategic need that most learning   ",
        name: "Ms of A Learning Organization",
        isNew: true,
        id: "1",

        drafts: [],
      },
      {
        thumbnail: "https://www.lumofy.com/wp-content/uploads/2022/07/8.png",
        description:
          "development is to improve their productivity in their role.",
        name: "Benefits Of Employee Learning",
        isNew: true,
        id: "2",
        drafts: [],
      },
      {
        thumbnail:
          "https://www.lumofy.com/wp-content/uploads/2022/08/Blogs-Cover-Template.png",
        description: "Creating an effective eLearning course...",
        name: "How To Develop An eLearning",
        isNew: true,
        id: "3",

        drafts: [],
      },
      {
        thumbnail:
          "https://www.lumofy.com/wp-content/uploads/2022/07/Webinar-Cover-Template.png",
        description: "Millions of Americans are leaving their jobs..",
        name: "Leveraging DEI ",
        isNew: true,
        id: "3",
        drafts: [],
      },
      {
        thumbnail: "https://www.lumofy.com/wp-content/uploads/2022/08/2-9.png",
        description:
          "Millions of Americans are leaving their jobs in droves...",
        name: "Leveraging DEI a ",
        isNew: true,
        id: "4",

        drafts: [],
      },
      {
        thumbnail: "https://www.lumofy.com/wp-content/uploads/2022/08/3-9.png",
        description: "Recent research showed that only 10% of companies...",
        name: "Effectively Gauging Competencies",
        isNew: true,
        id: "6",
        drafts: [],
      },
    ],
  },
  effects_UNSTABLE: [persistAtom],
});
