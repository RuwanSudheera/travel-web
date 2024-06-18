import { Collapse } from "antd";
import "../../styles/Shared.scss";

const { Panel } = Collapse;

function Faqs() {
  return (
    <div className="faq_main_wrapper">
      <h2 className="title">frequently asked questions</h2>
      <Collapse accordion defaultActiveKey={["1"]}>
        <Panel header="What is the best time to visit Sri Lanka?" key="1">
          <p>
            The best time to visit Sri Lanka depends on the region you plan to
            explore. The southwest coast is best visited from December to March,
            while the northeast coast is ideal from May to September.
          </p>
        </Panel>
        <Panel header="Do I need a visa to travel to Sri Lanka?" key="2">
          <p>
            Yes, most travelers need a visa to enter Sri Lanka. You can apply
            for an Electronic Travel Authorization (ETA) online before your
            trip.
          </p>
        </Panel>
        <Panel
          header="What are some traditional Sri Lankan customs I should be aware of?"
          key="3"
        >
          <p>
            Respecting elders, removing shoes before entering homes or temples,
            and dressing modestly when visiting religious sites are some
            important customs. It's also customary to eat with your right hand.
          </p>
        </Panel>
        <Panel header="What languages are spoken in Sri Lanka?" key="4">
          <p>
            Sinhala and Tamil are the official languages. English is widely
            spoken, especially in tourist areas and major cities.
          </p>
        </Panel>
        <Panel
          header="What are some must-visit cultural sites in Sri Lanka?"
          key="5"
        >
          <p>
            Key cultural sites include the ancient city of Anuradhapura, the
            Temple of the Tooth in Kandy, and the Sigiriya Rock Fortress.
          </p>
        </Panel>
        <Panel header="What is the currency used in Sri Lanka?" key="6">
          <p>The currency used is the Sri Lankan Rupee (LKR).</p>
        </Panel>
        <Panel header="What is the mainstay of Sri Lanka's economy?" key="7">
          <p>
            Sri Lanka's economy is primarily based on agriculture,
            manufacturing, and services. Key exports include tea, textiles, and
            rubber.
          </p>
        </Panel>
        <Panel header="Are credit cards widely accepted in Sri Lanka?" key="8">
          <p>
            Credit cards are widely accepted in major cities and tourist areas.
            However, it's a good idea to carry cash, especially when traveling
            to remote areas.
          </p>
        </Panel>
        <Panel
          header="What are some unique experiences to have in Sri Lanka?"
          key="9"
        >
          <p>
            Enjoying a scenic train ride through the hill country, going on a
            safari in one of the national parks, and participating in a
            traditional cooking class are some unique experiences.
          </p>
        </Panel>
        <Panel
          header="What type of cuisine can I expect in Sri Lanka?"
          key="10"
        >
          <p>
            Sri Lankan cuisine is known for its spicy curries, fresh seafood,
            and an abundance of tropical fruits. Popular dishes include rice and
            curry, hoppers, and kottu roti.
          </p>
        </Panel>
        <Panel
          header="Is Sri Lanka a family-friendly travel destination?"
          key="11"
        >
          <p>
            Yes, Sri Lanka offers a variety of family-friendly activities such
            as wildlife safaris, beach outings, and cultural experiences.
          </p>
        </Panel>
        <Panel
          header="What are some recommended souvenirs to buy in Sri Lanka?"
          key="12"
        >
          <p>
            Popular souvenirs include Ceylon tea, spices, handmade crafts, batik
            textiles, and gemstones.
          </p>
        </Panel>
        <Panel header="Is Sri Lanka safe for tourists?" key="13">
          <p>
            Sri Lanka is generally safe for tourists, but it's always wise to
            stay informed about local conditions and follow travel advisories.
          </p>
        </Panel>
        <Panel
          header="What kind of transportation options are available in Sri Lanka?"
          key="14"
        >
          <p>
            Transportation options include buses, trains, tuk-tuks, and private
            taxis. Trains are particularly scenic and a popular way to travel
            between cities.
          </p>
        </Panel>
        <Panel header="What should I pack for a trip to Sri Lanka?" key="15">
          <p>
            Light, breathable clothing, sunscreen, insect repellent, and
            comfortable walking shoes are essential. Don’t forget modest attire
            for visiting religious sites.
          </p>
        </Panel>
      </Collapse>
    </div>
  );
}

export default Faqs;
