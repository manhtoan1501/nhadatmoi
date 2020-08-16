import React from "react";
import {
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  product: {
    display: "inline",
    borderRadius: 2,
    "&:hover": {
      boxShadow: "2px 2px 8px 2px #aaa",
    },
  },
}));

const times = [
    {
      time: 'Time',
      messages: [
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
      ],
    },
    {
        time: 'Time',
        messages: [
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
        ],
      },
      {
        time: 'Time',
        messages: [
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
        ],
      },
    {
        time: 'Time',
        messages: [
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
          { message: 'message' }, { message: 'message' },
        ],
      },
    
    // {
    //   time: 'Time',
    //   messages: [
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //   ],
    // },
    // {
    //   time: 'Time',
    //   messages: [
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //   ],
    // }, {
    //   time: 'Time',
    //   messages: [
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //   ],
    // },
    // {
    //   time: 'Time',
    //   messages: [
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //   ],
    // }, {
    //   time: 'Time',
    //   messages: [
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //   ],
    // },
    // {
    //   time: 'Time',
    //   messages: [
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //   ],
    // }, {
    //   time: 'Time',
    //   messages: [
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //   ],
    // },
    // {
    //   time: 'Time',
    //   messages: [
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //   ],
    // }, {
    //   time: 'Time',
    //   messages: [
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //   ],
    // },
    // {
    //   time: 'Time',
    //   messages: [
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //   ],
    // }, {
    //   time: 'Time',
    //   messages: [
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //   ],
    // },
    // {
    //   time: 'Time',
    //   messages: [
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //   ],
    // }, {
    //   time: 'Time',
    //   messages: [
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //     { message: 'message' }, { message: 'message' },
    //   ],
    // },
];
const Test = (props) => {
    const myRef = React.useRef();
    const [timeState, setTimeState] = React.useState(2020);
    const onwheel = (e, index) => {
        const elHeight1 = document.getElementById(index).clientHeight;
        const {top, bottom, height, left, right, width, x, y} = myRef.current.getBoundingClientRect();
        const my = height - elHeight1;
        console.log(' xxxx 1', my);
        if(top < 130) {
            setTimeState(top);
        } else {
            setTimeState('2020');
        }
        console.log(' xxxx 2', elHeight1);
        console.log(' xxxx top', top,  ' y ', y, ' bottom ', bottom, ' width ', width, ' height ', height, );
    };

    return (
        <div id='kkkkkk' style={{ margin: '0 auto', display: 'inline-block', textAlign: 'center', backgroundColor: '#aaa' }}>
            <h1
                style={{
                    padding: 10, textAlign: 'center', alignItems: 'center',
                    alignContent: 'center', position: 'fixed',
                    top: 0, marginLeft: 200, height: 40,
                    borderRadius: 20, width: 250, backgroundColor: 'orange',
                }}
            >
                {timeState}
            </h1>
            {times.map((item, index) => {
                const { time, messages } = item;
                return (
                    <div id={index} key={index} ref={myRef} onWheel={(e) => onwheel(e, index)}>
                        <h1
                            style={{
                                padding: 10, marginLeft: 200, height: 40,
                                width: 250, borderRadius: 20, backgroundColor: 'white'
                            }}
                        >
                            {time}: {index}
                        </h1>
                        {messages.map((element, count) => {
                            const { message } = element;
                            return (
                                <div key={count}>
                                    <h2>{message}</h2>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default Test;