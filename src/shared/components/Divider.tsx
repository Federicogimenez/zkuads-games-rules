import { useWindowSize } from "../../hooks/useWindowSize";

interface DividerProps{
    color: string,
    bg_color?:string
}

export default function Divider ({color, bg_color="bg-transparent"}:DividerProps){

    const {width } = useWindowSize()
  const rows = 6;
  const circlesPerRow = width / 25 + 2;

  return (
    <div className={`relative w-[110%] h-[100px] overflow-hidden ${ bg_color}`}>
      {Array.from({ length: rows }).map((_, rowIndex) => {
        
        const par = rowIndex % 2 ;
        const size = 5 + rowIndex * 6;        

        return (
          <div
            key={rowIndex}
            className={`absolute w-full flex justify-between items-center`}
            style={{
                transform:`translateX(-${par*15}px)`,   
                top: `${(rowIndex / rows) * 100}%`,
            }}
          >
            {Array.from({ length: circlesPerRow }).map((_, circleIndex) => (
              <div
                key={circleIndex}
                className={`rounded-full ${color}`}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                }}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}

