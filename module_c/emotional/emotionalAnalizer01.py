#important libraries
import pandas as pd
import numpy as np
import nltk
import pickle
nltk.download('punkt')
nltk.download('wordnet')
import re
#importing stopwords is optional, in this case it decreased accuracy
from nltk.corpus import stopwords
import itertools
import time
from nltk.stem.wordnet import WordNetLemmatizer
lem = WordNetLemmatizer()

start_time = time.time()
# from google.colab import drive
# drive.mount('/content/drive', force_remount=True)



def startMain():

    # data = pd.read_csv('text_emotion1.csv')
    data = pd.read_csv('dataset/dataset01.csv')
    # data = csv.reader(open('text_emotion1.csv'), delimiter=',', quotechar='|')
    print(data)
    data = data.iloc[:10000,:]
    data.shape

    nltk.download('stopwords')
    stopset = set(stopwords.words('english'))



    data['content'] = data['content'].map(lambda x: cleaning(x))

    data = data.reset_index(drop=True)
    print(data)
    for i in range(len(data)):
        words = data.content[i][0]
        for j in range(len(data.content[i]) - 1):
            words += ' ' + data.content[i][j + 1]
        data.content[i] = words

    x = int(np.round(len(data)*0.75))
    train = data.iloc[:x,:].reset_index(drop = True)
    test = data.iloc[x:,:].reset_index(drop = True)


    from textblob.classifiers import NaiveBayesClassifier as NBC

    training_corpus = []

    for k in range(len(train)):
        training_corpus.append((train.content[k], train.sentiment[k]))
    test_corpus = []

    for l in range(len(test)):
        test_corpus.append((test.content[l], test.sentiment[l]))

    model = NBC(training_corpus)
    classifierDumpFile = 'naivebayes_test_model.pickle'
    outfile = open(classifierDumpFile, 'wb')        
    pickle.dump(model, outfile)        
    outfile.close()  

    print(model.accuracy(test_corpus)*100)

    from sklearn.metrics import classification_report

    predictions = []
    # print(model.classify("of new"))
    # for m in range(len(test)):
    #     predictions.append(model.classify(test.content[m]))
    #     print(predictions)
    # print(classification_report(test.sentiment, predictions))

    # predictions_df = pd.DataFrame({'Content': test.content, 'Emotion_predicted': predictions, 'Emotion_actual': test.sentiment})
    # # predictions_df.to_csv('/content/drive/My Drive/Colab Notebooks/data/naive_emotion_recognizer1.csv', index=False)
    # predictions_df.to_csv('naive_emotion_recognizer.csv', index = False)
    elapsed_time = time.time() - start_time
    print("processing time:", elapsed_time, "seconds")

    # predictions_df

def cleaning(text):


    print(text)
    txt = str(text)
    txt = re.sub(r"http\S+", "", txt)
    if len(txt) == 0:
        return 'no text 1'
    else:
        txt = txt.split()
        index = 0
        for j in range(len(txt)):
            if txt[j][0] == '@':
                index = j
        txt = np.delete(txt, index)
        if len(txt) == 0:
            return 'no text 2'
        else:
            words = txt[0]
            for k in range(len(txt)-1):
                words+= " " + txt[k+1]
            txt = words
            txt = re.sub(r'[^\w]', ' ', txt)
            if len(txt) == 0:
                return 'no text 3'
            else:
                txt = ''.join(''.join(s)[:2] for _, s in itertools.groupby(txt))
                txt = txt.replace("'", "")
                txt = nltk.tokenize.word_tokenize(txt)
                #data.content[i] = [w for w in data.content[i] if not w in stopset]
                for j in range(len(txt)):
                    txt[j] = lem.lemmatize(txt[j], "v")
                if len(txt) == 0:
                    return 'no text 4'
                else:
                    return txt

def main():
    # cleaning()
    startMain()


if __name__ == '__main__': main()