// import React from 'react'

import { type PropsWithChildren, type ReactNode } from 'react';

// interface CourseGoalsProps {
//   title: string;
//   children: ReactNode;
// }

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
