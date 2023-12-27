// // components/Main.tsx
// import React from 'react';

// const Main: React.FC = ({ children }: any) => {
//   return <main>{children}</main>;
// };

// export default Main;
// components/Main.tsx
import React, { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default Main;
