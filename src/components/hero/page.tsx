import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="Hero flex content-between">
      <div className="left">
        <div className="heading text-8xl uppercase font-black">
          perfect time to shop
        </div>
        <button>more collection</button>
        <div className="statics">
          <div className="kcount">
            <div className="upper">10k</div>
            <div className="lower">happy customers</div>
          </div>
          <div className="pcount">
            <div className="upper">400+</div>
            <div className="lower">daily sales</div>
          </div>
        </div>
      </div>
      <div className="right">sdfsdf</div>
    </div>
  );
}

export default Hero;
