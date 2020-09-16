import React from 'react'
import ActiveMatrix3x from './ActiveMatrix3x'
import NonActiveMatrix3x from './NonActiveMatrix3x'

export default function Section3X() {
    return (
        <div className="row">
              <div className="col">
                <div className="">
                  <div className="">
                    <div id="x3main" className="logotypeX4">
                      <h3 className="text-white"> DLF x3</h3>
                    </div>
                    <div className="ternary-wrapper row">
                     <ActiveMatrix3x matrixNumber={1}
                        matrixPrice={50}
                        userId={10}
                        partners={[
                          { id: "20", status: "overflow" },
                          { id: "20", status: "overflow" },
                          { id: "20", status: "overflow" },
                          { id: "20", status: "active" },
                        ]}
                        totalReinvest={0}/>
                     <ActiveMatrix3x matrixNumber={2}
                        matrixPrice={100}
                        userId={10}
                        partners={[
                          { id: "20", status: "overflow" },
                          { id: "20", status: "overflow" },
                          { id: "20", status: "overflow" },
                          { id: "20", status: "active" },
                        ]}
                        totalReinvest={0}/>
                     <ActiveMatrix3x matrixNumber={3}
                        matrixPrice={200}
                        userId={10}
                        partners={[
                          { id: "20", status: "overflow" },
                          { id: "20", status: "overflow" },
                          { id: "20", status: "overflow" },
                          { id: "20", status: "active" },
                        ]}
                        totalReinvest={0}/>
                     <ActiveMatrix3x matrixNumber={4}
                        matrixPrice={400}
                        userId={10}
                        partners={[
                          { id: "20", status: "overflow" },
                          { id: "20", status: "overflow" },
                          { id: "20", status: "overflow" },
                          { id: "20", status: "active" },
                        ]}
                        totalReinvest={0}/>
                    <NonActiveMatrix3x  matrixNumber={5} matrixPrice={800}/>
                    <NonActiveMatrix3x  matrixNumber={6} matrixPrice={1600}/>
                    <NonActiveMatrix3x  matrixNumber={7} matrixPrice={3200}/>
                    <NonActiveMatrix3x  matrixNumber={8} matrixPrice={6400}/>
                    <NonActiveMatrix3x  matrixNumber={9} matrixPrice={12800}/>
                    <NonActiveMatrix3x  matrixNumber={10} matrixPrice={25600}/>
                    <NonActiveMatrix3x  matrixNumber={11} matrixPrice={51200}/>
                    <NonActiveMatrix3x  matrixNumber={12} matrixPrice={102400}/>
                    <NonActiveMatrix3x  matrixNumber={13} matrixPrice={204800}/>
                    <NonActiveMatrix3x  matrixNumber={14} matrixPrice={409600}/>
                    <NonActiveMatrix3x  matrixNumber={15} matrixPrice={819200}/>
                    <NonActiveMatrix3x  matrixNumber={16} matrixPrice={1638400}/>
                    <NonActiveMatrix3x  matrixNumber={17} matrixPrice={3276800}/>
                    <NonActiveMatrix3x  matrixNumber={18} matrixPrice={6553600}/>
                    <NonActiveMatrix3x  matrixNumber={19} matrixPrice={13107200}/>
                    <NonActiveMatrix3x  matrixNumber={20} matrixPrice={26214400}/>
                 </div>
                  </div>
                </div>
              </div>
            </div>
            
    )
}
