// import React from 'react'

import { type ReactNode } from 'react';

interface CourseGoalsProps {
  title: string;
  children: ReactNode;
}

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
