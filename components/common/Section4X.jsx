import React from "react";
import ActiveMatrix from "./ActiveMatrix";
import NonActiveMatrix from "./NonActiveMatrix";

export default function Section4X() {
  return (
    <div className="row">
      <div className="col">
        <div className="">
          <div className="">
            <div id="x4main" className="logotypeX4">
              {/* <img src="/img/x4.svg" alt /> */}
              <h3 className="text-white">DLF x4</h3>
            </div>
            <div className="binary-wrapper row">
              <ActiveMatrix
                matrixNumber={1}
                matrixPrice={50}
                userId={10}
                partners={[
                  { id: "20", status: "overflow" },
                  { id: "20", status: "overflow" },
                  { id: "20", status: "overflow" },
                  { id: "20", status: "active" },
                ]}
                totalReinvest={0}
              />
              <ActiveMatrix
                matrixNumber={2}
                matrixPrice={100}
                userId={10}
                partners={[
                  { id: "20", status: "overflow" },
                  { id: "20", status: "overflow" },
                  { id: "20", status: "active" },
                ]}
                totalReinvest={0}
              />
              <ActiveMatrix
                matrixNumber={3}
                matrixPrice={200}
                userId={10}
                partners={[
                  { id: "20", status: "overflow" },
                  { id: "20", status: "overflow" },
                  { id: "20", status: "active" },
                ]}
                totalReinvest={0}
              />

                    <NonActiveMatrix  matrixNumber={4} matrixPrice={400}/>
                    <NonActiveMatrix  matrixNumber={5} matrixPrice={800}/>
                    <NonActiveMatrix  matrixNumber={6} matrixPrice={1600}/>
                    <NonActiveMatrix  matrixNumber={7} matrixPrice={3200}/>
                    <NonActiveMatrix  matrixNumber={8} matrixPrice={6400}/>
                    <NonActiveMatrix  matrixNumber={9} matrixPrice={12800}/>
                    <NonActiveMatrix  matrixNumber={10} matrixPrice={25600}/>
                    <NonActiveMatrix  matrixNumber={11} matrixPrice={51200}/>
                    <NonActiveMatrix  matrixNumber={12} matrixPrice={102400}/>
                    <NonActiveMatrix  matrixNumber={13} matrixPrice={204800}/>
                    <NonActiveMatrix  matrixNumber={14} matrixPrice={409600}/>
                    <NonActiveMatrix  matrixNumber={15} matrixPrice={819200}/>
                    <NonActiveMatrix  matrixNumber={16} matrixPrice={1638400}/>
                    <NonActiveMatrix  matrixNumber={17} matrixPrice={3276800}/>
                    <NonActiveMatrix  matrixNumber={18} matrixPrice={6553600}/>
                    <NonActiveMatrix  matrixNumber={19} matrixPrice={13107200}/>
                    <NonActiveMatrix  matrixNumber={20} matrixPrice={26214400}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
