
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
        
        "thumbnail": "https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=2048x2048&w=is&k=20&c=t9_zg20wVbrBoGn0tw__1fFq4ykeKs15TQQ3x-ehVC0=",
        "description": "klklk",
        "name": "cource1",
        "isNew": true,
        "id": '2',

        "drafts": []
    },
    {
    
      "thumbnail": "https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=2048x2048&w=is&k=20&c=t9_zg20wVbrBoGn0tw__1fFq4ykeKs15TQQ3x-ehVC0=",
      "description": "klklk",
      "name": "cource2",
      "isNew": true,
      "id": "1",
      "drafts": []
  },
  {
        
    "thumbnail": "https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=2048x2048&w=is&k=20&c=t9_zg20wVbrBoGn0tw__1fFq4ykeKs15TQQ3x-ehVC0=",
    "description": "klklk",
    "name": "cource1",
    "isNew": true,
    "id": '2',

    "drafts": []
},
{

  "thumbnail": "https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=2048x2048&w=is&k=20&c=t9_zg20wVbrBoGn0tw__1fFq4ykeKs15TQQ3x-ehVC0=",
  "description": "klklk",
  "name": "cource2",
  "isNew": true,
  "id": "1",
  "drafts": []
},
{
        
  "thumbnail": "https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=2048x2048&w=is&k=20&c=t9_zg20wVbrBoGn0tw__1fFq4ykeKs15TQQ3x-ehVC0=",
  "description": "klklk",
  "name": "cource1",
  "isNew": true,
  "id": '2',

  "drafts": []
},
{

"thumbnail": "https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=2048x2048&w=is&k=20&c=t9_zg20wVbrBoGn0tw__1fFq4ykeKs15TQQ3x-ehVC0=",
"description": "klklk",
"name": "cource2",
"isNew": true,
"id": "1",
"drafts": []
}
      
    ],
  },
  effects_UNSTABLE: [persistAtom],
});
