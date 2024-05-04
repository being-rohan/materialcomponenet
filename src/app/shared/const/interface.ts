export interface IcourseRes {
    payload: Icourse[]
  }
  
  export interface Icourse {
    id: number
    description: string
    iconUrl: string
    courseListIcon?: string
    longDescription: string
    category: 'BEGINNER' | 'ADVANCED'
    lessonsCount?: number
  }
  
  
  export interface IlessonRes {
    payload: Ilesson[]
  }
  export interface Ilesson {
    id: number;
    description: string;
    duration: string;
    seqNO: number;
    courseId: number
  }