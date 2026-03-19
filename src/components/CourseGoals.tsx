import { type PropsWithChildren } from 'react';

type CourseGoalsProps = PropsWithChildren<{ title: string }>;

export default function CourseGoals({ title, children }: CourseGoalsProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>DELETE</button>
    </article>
  );
}


// import {type FC, type PropsWithChildren } from 'react';

// interface CourseGoalsProps {
//   title: string;
//   children: ReactNode;
// }


/*

const CourseGoals: FC<CourseGoalsProps> = ({ title, children }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>DELETE</button>
    </article>
  );
}
export default CourseGoals
*/
