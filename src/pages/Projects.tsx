import { styled } from "styled-components";
import Calculator from '../components/Calculator'

const StyledDiv = styled.div`
    background-color: mistyrose;
    width: 70%;
    height: auto;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1000px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`;

const MainText = styled.div`
    width: 80%;
    text-align: left;
    margin: 1vh auto;
    @media screen and (max-width: 900px) {
        width: 100%;
    }
`;

const StyledParagraph = styled.p`
    margin: 0 1vw;
    font-size: calc(1.5px + 1.5vw);
`;

const StyledHeader = styled.h3`
    text-align: center;
    font-size: calc(2px + 3vw);
    margin: 0;
`;

const StyledUl = styled.ul`
    
`;

const StyledLi=styled.li`
    font-size: calc(1.5px + 1.5vw);
`;


const StyledSubHeader = styled.h4`
    font-size: calc(1.5px + 1.5vw);
`;


export default function CompetitionDetails() {
    return (
        <StyledDiv>
            <MainText>
                <StyledHeader>Projects</StyledHeader>
                <StyledSubHeader>Calculator</StyledSubHeader>
                <Calculator />
                <StyledSubHeader>Credit Card Fraud Detection Kaggle Competition</StyledSubHeader>
                <StyledParagraph>Skills: Boosting, Machine Learning, Pandas</StyledParagraph>
                <StyledUl>
                    <StyledLi>
                        Achieved 1st place and 98.77% accuracy on out-of-sample data in a Kaggle competition with over 120 participants, developing a high-performing fraud detection model using a dataset of 1.3M+ transactions.
                    </StyledLi>
                    <StyledLi>
                        Optimized model performance through hyperparameter selection, iterative tuning, and addressing class imbalances to deliver highly reliable predictions.
                    </StyledLi>
                    <StyledLi>
                        Implemented effective data preprocessing and efficient computation to maintain model scalability and accuracy.
                    </StyledLi>
                </StyledUl>
                <StyledSubHeader>Amazon Review Rating Machine Learning Model</StyledSubHeader>
                <StyledParagraph>Skills: Logistic Regression, NLP, TF-IDF, NLTK, Pandas</StyledParagraph>
                <StyledUl>
                    <StyledLi>
                        Developed a predictive model for Amazon movie reviews using NLP techniques like TF-IDF, tokenization, and lemmatization on 1.7M+ reviews with star ratings and metadata.
                    </StyledLi>
                    <StyledLi>
                        Engineered sentiment-based features using polarity and subjectivity scores to enhance predictions.
                    </StyledLi>
                    <StyledLi>
                        Refined the model iteratively, experimenting with feature engineering and resampling techniques to improve accuracy and address imbalances.
                    </StyledLi>
                </StyledUl>

                <StyledSubHeader>First Author Research Paper</StyledSubHeader>
                <StyledUl>
                    <StyledLi>Authored a research paper on a novel biopolymer-based aerogel for fast CO₂ capture.</StyledLi>
                    <StyledLi>Collaborated with cross-functional teams to optimize methods for scalability.</StyledLi>
                    <StyledLi>In preparation.</StyledLi>
                </StyledUl>

                <StyledSubHeader>Latent Semantic Analysis (LSA) Search Engine Web App</StyledSubHeader>
                <StyledParagraph>Skills: Python, Flask, NumPy, Pandas</StyledParagraph>
                <StyledUl>
                    <StyledLi>Built an interactive web app using LSA for document retrieval based on user queries.</StyledLi>
                    <StyledLi>Implemented Singular Value Decomposition (SVD) for dimensionality reduction to enable search and comparison of articles.</StyledLi>
                    <StyledLi>Designed a visual interface to display search results and cosine similarity scores.</StyledLi>
                </StyledUl>
            </MainText>
        </StyledDiv>
    );
}