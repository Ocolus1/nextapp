import React from "react";
import PrivateSidenav from "../components/core/PrivateSidenav";
import PrivateHeader from "../components/core/PrivateHeader";
import AboveMain from "../components/core/AboveMain";
import Footer from "../components/core/Footer";
export default function Goal() {
  return (
    <React.Fragment>
      <div className="mymain">
        <PrivateHeader />
        <div className="container"
          style={{ paddingTop: "100px" }}>
          <AboveMain />
        </div>
        <div
          className="container main-container"
          style={{ paddingTop: "10px" }}
        >
        <div className="row">
          
          <div className="col-lg-9">
            <div className="row">
              <div className="col">
                <div className="border-gradient">
                  <div className="border-gradient_content guide">
                    <div className="guide_subject" style={{ marginTop: 15 }}>
                      <div className="guide_subject__blue">
                        What is  DLF <br />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-7">
                        <span className="color__pink">
                          DLF matrix marketing
                        </span>
                        ‒ is a closed system, without deadlines for slots, with
                        a limited number of places and an unlimited number of
                        reinvests.
                        <p>
                          In the matrix, the referral link is fixed the person
                          who invited you. You always follow your superior
                          partner, to each of the slots he activated.
                        </p>
                        <p>
                          In the
                          <span className="color__blue">
                            DLF x3 program
                          </span>
                          elow you is three places in one line. In the
                          <span className="color__blue">
                            DLF x4 program
                          </span>
                          below you are two lines – 2 places in the first line
                          and 4 places in the second. When you register in
                          DLF, you open both programs simultaneously.
                        </p>
                        {/* <br />
                        <div className="guide_icon">
                          <div>
                            <img src="/img/guide/1-3.svg" alt style={{}} />
                            <span>WITH REFERENCE</span>
                          </div>
                          <div>
                            <img src="/img/guide/1-4.svg" alt style={{}} />
                            <span>no expiration date of the SLOT</span>
                          </div>
                          <div>
                            <img src="/img/guide/1-5.svg" alt style={{}} />
                            <span>Unlimited automatic reinvests</span>
                          </div>
                        </div> */}
                      </div>
                      <div className="col-md-5">
                        <div className="guide_img">
                          <img
                            src={require("../public/images/4x-guides.png")}
                            width="100%"
                            alt=""
                            style={{
                              display: "block",
                              marginLeft: "auto",
                              marginRight: "auto",
                              width: "50%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="guide_subject">
                      <div className="guide_subject__blue">SLOTS</div>
                    </div>
                    In this programs,
                    <span className="color__pink">DLF x4</span> have 12
                    slots. All similar and work in the same way.
                    <p />
                    Each subsequent slot is 2 times more expensive than the
                    previous one. Both income and profits from them are twice as
                    high!<p></p> How many slots can be activated immediately? As
                    much as you want! At least all twelve at once!<p></p> They
                    have no expiration date, so you can not be afraid that they
                    will burn. All active slots move and bring you revenue in
                    parallel
                    <p />
                    <div className="guide_img">
                      <img
                        // src="/img/guide/2.svg"
                        src={require("../public/images/4xs.png")}
                        alt=""
                        width="100%"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="guide_subject">
                      <div className="guide_subject__blue">REGISTRATION</div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        The first slot of each program costs
                        <span className="color__blue">0.025 TRX.</span> They are
                        bought together; separately, the first slot cannot be
                        taken. Accordingly, the start to the matrix is generally
                        <span className="color__pink">0.05 TRX.</span> You can
                        purchase all further slots separately, in order from the
                        smaller to the larger. It is impossible to buy a third
                        slot without having a second open.
                      </div>
                      {/* <div className="col-md-5">
                        <img src='' alt />
                      </div> */}
                    </div>
                    {/*  */}
                    <div className="guide_subject">
                      <div className="guide_subject__purple">DLF x3</div>
                    </div>
                    <div className="row">
                      <div
                        className="col-md-3"
                        style={{ textAlign: "center", paddingTop: 40 }}
                      >
                        <img
                          src={require("../public/images/3x-guides.png")}
                          alt=""
                        />
                      </div>
                      <div className="col-md-9">
                        In parallel, the DLF x4 program also works for you,
                        here an overflow system is organized from above and from
                        below. We are building a team together. There may be at
                        least all of you invited, at least not one invited by
                        you, or mixed.
                        <p>
                          <span className="color__purple">
                            {/* <img src="/img/guide/upline-01.svg" alt /> */}1
                            &gt; 2 &gt; Partners who takes two places below you
                            in the first line are two places in the second line
                            of the higher. A 100% payment goes to the wallet of
                            your higher partner.
                          </span>
                        </p>
                        <p>
                          <span className="color__blue">
                            {/* <img src="/img/guide/money-01.svg" alt /> */}3
                            &gt; 4 &gt; 5 &gt; You also receive income from the
                            second line, 100% from four people. Of these, 3
                            payments go instantly to your wallet.
                          </span>
                        </p>
                        <p>
                          <span className="color__pink">
                            {/* <img src="/img/guide/reinvest-01.svg" alt /> */}
                            6 &gt; The last payout is the closing slot, and it
                            also makes a reinvest,
                          </span>
                          buying you the same slot again, and the payment of
                          100% is transferred to your higher partner.
                        </p>
                      </div>
                    </div>
                    <div className="guide_subject">
                      <div className="guide_subject__purple">DLF x4</div>
                    </div>
                    <div className="row">
                      <div
                        className="col-md-3"
                        style={{ textAlign: "center", paddingTop: 40 }}
                      >
                        <img
                          src={require("../public/images/4x-guides.png")}
                          alt=""
                        />
                      </div>
                      <div className="col-md-9">
                        In parallel, the DLF x4 program also works for you,
                        here an overflow system is organized from above and from
                        below. We are building a team together. There may be at
                        least all of you invited, at least not one invited by
                        you, or mixed.
                        <p>
                          <span className="color__purple">
                            {/* <img src="/img/guide/upline-01.svg" alt /> */}1
                            &gt; 2 &gt; Partners who takes two places below you
                            in the first line are two places in the second line
                            of the higher. A 100% payment goes to the wallet of
                            your higher partner.
                          </span>
                        </p>
                        <p>
                          <span className="color__blue">
                            {/* <img src="/img/guide/money-01.svg" alt /> */}3
                            &gt; 4 &gt; 5 &gt; You also receive income from the
                            second line, 100% from four people. Of these, 3
                            payments go instantly to your wallet.
                          </span>
                        </p>
                        <p>
                          <span className="color__pink">
                            {/* <img src="/img/guide/reinvest-01.svg" alt /> */}
                            6 &gt; The last payout is the closing slot, and it
                            also makes a reinvest,
                          </span>
                          buying you the same slot again, and the payment of
                          100% is transferred to your higher partner.
                        </p>
                      </div>
                    </div>
                    <div className="guide_subject">
                      <div className="guide_subject__pink">REINVEST</div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <span className="color__pink">REINVEST</span> – this is
                        the re-opening (purchase) of the slot at the current
                        level.
                        <p>
                          Reinvest opens the same slot for you again, and you
                          continue to receive income from it. Without
                          reinvestment, this slot would close, and that’s it.
                        </p>
                        <p>
                          Reinvest takes place automatically, as soon as you
                          occupy the last free place, the current slot closes
                          and goes to the archive.
                        </p>
                        <p>
                          You re-occupy the free space in the slot with a higher
                          partner and a new slot with free places opens for you,
                          and 100% payment goes to the wallet of your higher
                          partner.
                        </p>
                        <p>
                          Similarly, your refferal partners will have
                          reinvestments, and you will instantly receive income
                          every time.
                        </p>
                      </div>
                      {/* <div className="col-md-5">
                        <img src="/img/guide/6.svg" alt />
                      </div> */}
                    </div>
                    <div className="guide_subject">
                      <div className="guide_subject__pink">UPGRADE</div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <span className="color__pink">UPGRADE</span> – is the
                        opening (purchase) of the next slot of a more expensive
                        level. It is done once at the first opening of the slot.
                        The payment goes to your superior partner, provided that
                        he has a slot of this level.
                        <p>
                          There is enough income from each slot to reinvest the
                          slot of the same level and buy a slot of the next
                          level.
                        </p>
                        <p>
                          You decide whether to purchase the next level slot!
                        </p>
                        <p>
                          A reinvestment of the slot occurs automatically. If
                          the next slot is not open for you, then from the
                          second round, after reinvestment, all payments will be
                          redirected to a higher partner.
                        </p>
                        <p>
                          When you buy the necessary slot, then at the next
                          reinvest your referral partner will take a place under
                          you, and with each reinvest will take a place under
                          you again.
                        </p>
                      </div>
                      {/* <div className="col-md-5">
                        <img src="/img/guide/7.svg" width="100%" alt />
                        <br />
                        <br />
                        <p>
                          <img
                            src="/img/lost.svg"
                            alt
                            width={20}
                            style={{ width: 20 }}
                          />
                          <span className="color__pink">Lost profit</span> –
                          payment left to a higher partner, due to the lack of
                          an upgrade to a more expensive slot.
                        </p>
                        <p>
                          <i
                            className="fa fa-gift"
                            style={{
                              color: "#00C34A",
                              fontSize: "13pt",
                              marginRight: 10,
                            }}
                          />
                          <span className="color__green">Extra profit</span> –
                          payment received to you at the expense of the Lost
                          profit of a lower partner.
                        </p>
                      </div> */}
                    </div>
                    <div className="guide_subject">
                      <div className="guide_subject__blue">
                        OVERFLOWS, OVERTAKING AND RETURNS
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 text-left">
                        <img
                          src={require("../public/images/return.png")}
                          alt=""
                        />
                      </div>
                      <div className="col-md-12">
                        {/* <ul style={{ listStyle: "none", marginTop: 35 }}>
                          <li
                            style={{
                              paddingLeft: 35,
                              background: 'url("/img/guide/8-1.svg") no-repeat',
                              backgroundSize: 25,
                            }}
                          >
                            
                            personal partner
                          </li>
                          <li
                            style={{
                              marginTop: 15,
                              paddingLeft: 35,
                              background: 'url("/img/guide/8-2.svg") no-repeat',
                              backgroundSize: 25,
                            }}
                          >
                            
                            overflow (personally invited partner of your
                            superior)
                          </li>
                          <li
                            style={{
                              marginTop: 15,
                              paddingLeft: 35,
                              background: 'url("/img/guide/8-3.svg") no-repeat',
                              backgroundSize: 25,
                            }}
                          >
                            
                            overflow from below (personally invited partner of
                            your downline)
                          </li>
                          <li
                            style={{
                              marginTop: 15,
                              paddingLeft: 35,
                              background: 'url("/img/guide/8-4.svg") no-repeat',
                              backgroundSize: 25,
                            }}
                          >
                            
                            partner who overtook his superior
                          </li>
                        </ul> */}
                        You can overtake your superior partner by opening slots
                        which he has not yet reached.
                        <p>
                          In this case, you get up to his superior partner, the
                          closest who has such level of the slot, and the income
                          goes to him.
                        </p>
                        <p>
                          If he doesn’t have this slot available, then in the
                          same way you are already overtaking two superiors
                          until the system finds a partner who already has
                          active slot of this lievel.
                        </p>
                        <p>
                          Referral link returns the partners. This means that
                          when your superior buys this slot, then the next
                          reinvest, you will again take a place under him.
                        </p>
                      </div>
                    </div>
                    <div className="guide_subject">
                      <div className="guide_subject__pink">
                      REFERRAL ACTIVATOR
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        You can overtake your superior partner by opening slots
                        which he has not yet reached.
                        <p>
                          In this case, you get up to his superior partner, the
                          closest who has such level of the slot, and the income
                          goes to him.
                        </p>
                        <p>
                          If he doesn’t have this slot available, then in the
                          same way you are already overtaking two superiors
                          until the system finds a partner who already has
                          active slot of this lievel.
                        </p>
                        <p>
                          Referral link returns the partners. This means that
                          when your superior buys this slot, then the next
                          reinvest, you will again take a place under him.
                        </p>
                      </div>
                    </div>
                    <div className="guide_subject">
                      <div className="guide_subject__purple">
                      AUTO REFERRAL
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        You can overtake your superior partner by opening slots
                        which he has not yet reached.
                        <p>
                          In this case, you get up to his superior partner, the
                          closest who has such level of the slot, and the income
                          goes to him.
                        </p>
                        <p>
                          If he doesn’t have this slot available, then in the
                          same way you are already overtaking two superiors
                          until the system finds a partner who already has
                          active slot of this lievel.
                        </p>
                        <p>
                          Referral link returns the partners. This means that
                          when your superior buys this slot, then the next
                          reinvest, you will again take a place under him.
                        </p>
                      </div>
                    </div>
                    <div className="guide_subject">
                      <div className="guide_subject__blue">
                      GLOBAL SPILL
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        You can overtake your superior partner by opening slots
                        which he has not yet reached.
                        <p>
                          In this case, you get up to his superior partner, the
                          closest who has such level of the slot, and the income
                          goes to him.
                        </p>
                        <p>
                          If he doesn’t have this slot available, then in the
                          same way you are already overtaking two superiors
                          until the system finds a partner who already has
                          active slot of this lievel.
                        </p>
                        <p>
                          Referral link returns the partners. This means that
                          when your superior buys this slot, then the next
                          reinvest, you will again take a place under him.
                        </p>
                      </div>
                    </div>
                    <div className="guide_subject">
                      <div className="guide_subject__pink">
                      REFERRAL BONUS
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        You can overtake your superior partner by opening slots
                        which he has not yet reached.
                        <p>
                          In this case, you get up to his superior partner, the
                          closest who has such level of the slot, and the income
                          goes to him.
                        </p>
                        <p>
                          If he doesn’t have this slot available, then in the
                          same way you are already overtaking two superiors
                          until the system finds a partner who already has
                          active slot of this lievel.
                        </p>
                        <p>
                          Referral link returns the partners. This means that
                          when your superior buys this slot, then the next
                          reinvest, you will again take a place under him.
                        </p>
                      </div>
                    </div>
                    <div className="guide_subject">
                      <div className="guide_subject__purple">
                      300% UNIQUE PROTOCOL
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        You can overtake your superior partner by opening slots
                        which he has not yet reached.
                        <p>
                          In this case, you get up to his superior partner, the
                          closest who has such level of the slot, and the income
                          goes to him.
                        </p>
                        <p>
                          If he doesn’t have this slot available, then in the
                          same way you are already overtaking two superiors
                          until the system finds a partner who already has
                          active slot of this lievel.
                        </p>
                        <p>
                          Referral link returns the partners. This means that
                          when your superior buys this slot, then the next
                          reinvest, you will again take a place under him.
                        </p>
                      </div>
                    </div>
                    <div className="guide_subject">
                      <div className="guide_subject__blue">
                        TERMS AND DEFINITIONS
                      </div>
                    </div>
                    <span className="color__purple">SUPERIOR PARTNER </span> – a
                    person whose referral link you have registered for
                    <br />
                    <span className="color__purple">Referral partner </span> – a
                    partner registered with your referral link
                    <p>
                      <span className="color__pink">UPGRADE</span> – is the
                      opening (purchase) of the next slot of a more expensive
                      level
                      <br />
                      <span className="color__pink">REINVEST</span> – is an
                      automatic re-opening (purchase) of the slot of the current
                      level
                    </p>
                    <p>
                      <span className="color__brown">Lost profit </span> –
                      payment left to a higher partner, due to the lack of an
                      upgrade to a more expensive slot.
                      <br />
                      <span className="color__green">Extra profit </span> –
                      payment received to you at the expense of the Lost profit
                      of a lower partner.
                    </p>
                    <p>
                      <span className="color__blue">
                        Overflow from a superior
                      </span>
                      – a partner of your superior partner who has closed a
                      place in your slot.
                      <br />
                      <span className="color__blue">
                        Overflow from a downstream
                      </span>
                      – a partner of your downline who has closed a place in
                      your slot. <br />
                      <span className="color__blue">Overtaking</span> – the
                      purchase by a lower partner of a more expensive site,
                      which you don’t have yet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PrivateSidenav />
        </div>
      </div>
      <Footer />
      </div>
    </React.Fragment>
  );
}
