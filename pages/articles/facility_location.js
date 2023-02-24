import Head from "next/head";
import Image from "next/image";

import Layout from "../../components/layout";

import ArticleTitle from "../../components/ArticleTitle";
import AnswerTextContent from "../../components/AnswerTextContent";
import FinalNotesTextContent from "../../components/FinalNotesTextContent";
import NotesTextContent from "../../components/NotesTextContent";
import QuestionTextContent from "../../components/QuestionTextContent";
import TextContent from "../../components/TextContent";


function About() {
    return (
        <Layout>
            <Head>
                <title>Facility Location</title>
            </Head>
            
            <ArticleTitle>Facility Location</ArticleTitle>

            <TextContent>
                Imagine that there exists a 2d town, where everyone's houses lie on a straight line.
            </TextContent>

            <Image
                priority
                src="/images/articles/facility_location/town_five.png"
                height={400}
                width={600}
                alt="2d town"
            />
            
            <TextContent>
                Now suppose that you are to build a new facility in this town.
                The facility can be built anywhere along the line.

                <br /><br /><br />
                
                Let us define the <b>cost</b> of the facilty, to a resident, as the distance from his house to the facility.
                
                <br /><br /><br />
                
                To each resident in the town, naturally he would want the facility to be as close to his house as possible.
                In other words, each resident would want to <b>minimise</b> the cost of the facility to himself.

                <br /><br /><br />

                Furthermore, you want to <b>minimise</b> the <b>maximum</b> cost of the facility to any resident - because you are a nice person.
            </TextContent>

            <QuestionTextContent>
                Now, if you were to build the facility, where would you build it?
            </QuestionTextContent>

            <br /><br /><br />
            
            <TextContent>
                Before we can think about solving this for so many people, let us think about a simpler case first.
            </TextContent>
            
            <Image
                priority
                src="/images/articles/facility_location/town_two.png"
                height={400}
                width={600}
                alt="2d town with only two houses"
            />
            
            <TextContent>
                Maybe you'll think: "Well, I'll just build the facility in the middle of the town."
            </TextContent>

            <Image
                priority
                src="/images/articles/facility_location/town_two_middle.png"
                height={400}
                width={600}
                alt="2d town - build in the middle?"
            />
            
            <QuestionTextContent>
                But what is the problem here? Think about it before you scroll down.
            </QuestionTextContent>

            <Image
                priority
                src="/images/articles/facility_location/town_two_lie.png"
                height={400}
                width={900}
                alt="2d town - not a truthful strategy?"
            />

            <AnswerTextContent>
                The problem is that this is not strategyproof.
            </AnswerTextContent>

            <TextContent>
                What if one of the residents (e.g. the right one) lies about his location?
                He could lie and say that he lives even further right. Then when you build the facility in the middle,
                it will be closer to his house than it would originally have.
            </TextContent>
            
            <NotesTextContent>
                <b>Strategyproof</b> - A game in which no player has an incentive to lie about his or her preferences.
            </NotesTextContent>

            <br /><br /><br />
            
            <QuestionTextContent>
                So, where should you build your facility, such that it is <b>strategyproof</b> (each resident has no incentive to lie)?
            </QuestionTextContent>
            
            <AnswerTextContent>
                <b>Claim: </b>Build the facility at the median of the houses' locations.
                If there are an even number of houses, always round down.
                For instance, if there are 4 houses, build the facility at the 2nd house.
            </AnswerTextContent>
            
            <br /><br /><br />
            
            <QuestionTextContent>
                Why does this work? Look at the image and think about it before you scroll down.
            </QuestionTextContent>

            <Image
                priority
                src="/images/articles/facility_location/town_five.png"
                height={400}
                width={600}
                alt="2d town"
            />

            <br /><br /><br />

            <AnswerTextContent>
                <b>Answer: </b>
                There are three groups of residents with this answer.
                <br /><br />
                <u>Group 1:</u> The resident who lives at the facility.
                <br /><br />
                <u>Group 2:</u> Residents who live to the left of the facility.
                <br /><br />
                <u>Group 3:</u> Residents who live to the right of the facility.

                <br /><br />

                For each group of residents, we can show that they have no incentive to lie.
            </AnswerTextContent>

            <br /><br />

            <Image
                priority
                src="/images/articles/facility_location/town_five_soln.png"
                height={400}
                width={600}
                alt="2d town solution for 5 houses"
            />
            
            <TextContent>
                <u>Group 1:</u> The resident who lives at the facility. In this example, that's X3.

                <br /><br />

                Why would he lie? The facility is already at his house. His cost is <b>0</b>.
            </TextContent>

            <br /><br />
            
            <TextContent>
                <u>Group 2:</u> Residents who live to the left of the facility. Let us take X2 as an example.

                <br /><br />

                X2 can lie about his location in one of two ways:
                <ol>
                    <li>He can lie and say any other location to the <b>left</b> of X3.</li>
                    <li>He can lie and say any other location to the <b>right</b> of X3.</li>
                </ol>
                
                <br />

                If he decides to go with lie #1, will it have made a difference? <br />
                The median house is still at X3, so he would have been unable to change the outcome.

                <br /><br />

                If he decides to go with lie #2, will it really improve his situation? <br />

            </TextContent>
                
            <Image
                priority
                src="/images/articles/facility_location/town_five_lie.png"
                height={400}
                width={800}
                alt="2d town solution for 5 houses - is lying better?"
            />

            <TextContent>
                Suppose X2 lies and the facility is built at any of the red arrows. <br />
                The point is, the facility will no longer be at X3.

                <br /><br />

                Is this a better outcome for X2? <br />
                He lied about his location, and in reality he still lives beside X1. <br />
                But now, the facility is <b>further</b> away from his house than it would have been if he had told the truth.
            </TextContent>
            
            <TextContent>
                <u>Group 3:</u> Residents who live to the right of the facility.

                <br /><br />

                Using similar logic, we can show that they will not have an incentive to lie.
            </TextContent>

            <AnswerTextContent>
                <b>Answer (again): </b>Build the facility at the median of the houses' locations. <br />
                This ensures that each resident has no incentive to lie.
                If there are an even number of houses, always round down.
            </AnswerTextContent>

            <NotesTextContent>
                <b>Note: </b> If there are even number of houses, you can choose to always round up as well. <br />
                The result will be the same (no one has an incentive to lie), as long as you are consistent.

                <br /><br />

                You can convince yourself that the same logic works with an even number of houses - no one has an incentive to lie.
            </NotesTextContent>

            <QuestionTextContent>
                Is this the only strategyproof solution?
            </QuestionTextContent>

            <br /><br /><br /><br /><br /><br />
            
            <TextContent>
                Think about it before you scroll down!
            </TextContent>

            <br /><br /><br /><br /><br /><br />
            
            <QuestionTextContent>
                What if we <b>always build the facility at the leftmost house</b>? Is it still strategyproof?
            </QuestionTextContent>

            <Image
                priority
                src="/images/articles/facility_location/town_five_leftmost.png"
                height={400}
                width={600}
                alt="2d town solution for 5 houses - leftmost?"
            />

            <AnswerTextContent>
                <b>Answer: </b>It is strategyproof as well. <br />
                Convince yourself using the same logic: <br />
                <ol>
                    <li>Group 1: The resident who lives at the facility. In this example, that's X1. Why will he lie?</li>
                    <li>Group 2: Residents who live to the right of the facility. Will lying ever lead to the facility being built nearer to his house?</li>
                </ol>
            </AnswerTextContent>

            <br /><br /><br />

            <QuestionTextContent>
                So why did I choose the median as the strategyproof solution?
            </QuestionTextContent>

            <AnswerTextContent>
                <b>Answer: </b>It is a fairer solution. <br />
                Remember, the facility is supposed to serve the entire town. <br />
                I said above that because I am a nice person, I wish to minimise the maximum cost of the residents. <br />
            </AnswerTextContent>

            <br />

            <FinalNotesTextContent>
                <b>Final notes: </b> The idea of <u>strategyproof games</u> is common in <u>game theory</u>. <br />
                There are many types of games in game theory, such as <u>zero-sum games</u>, <u>cooperative games</u>, etc. <br />
            </FinalNotesTextContent>

        </Layout>
    );
}

export default About;
