import React from 'react'
import type { User } from "../types/user";
import { FC } from 'react';

export const ListenItems: FC<User> = props => {
  const {id, name, age, personalColor} = props;
  return (
    <p style={{color: personalColor}}>{id}: {name}({age})</p>
  )
}

