import WhyChooseUsCards from './WhyChooseUsCards'
import WhyChooseusContent from './WhyChooseUsContent';
import WhyList from './WhyLists';
import Link from 'next/link';
const WhyChooseUs = ()=> {
    return (
      <>
        <div className="cs-why_choose_us_section">
            <div className="cs-container d-flex align-center justify-between">
                <div className="cs-left_section">
                    <ul className="cs-why_option">
                        <WhyChooseUsCards />
                    </ul>
                </div>
                <div className="cs-right_section">
                    <WhyChooseusContent />
                    <ul className="cs-list d-flex align-center justify-between">
                        <WhyList />
                    </ul>
                    <div className="cs-button small">
                        <Link href="/about"><a className="d-flex align-center justify-center">Discover More</a></Link>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}
export default WhyChooseUs