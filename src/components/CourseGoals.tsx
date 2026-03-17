// import React from 'react'

import { ReactNode } from "react";

interface CourseGoalsProps {
  title: string;
  decription: string;
  children: ReactNode
}

export default function CourseGoals({
  title,
  decription,
  children
}: CourseGoalsProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{decription}</p>
      </div>
      <button>DELETE</button>
      {children}
    </article>
  );
}
