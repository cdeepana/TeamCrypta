import pickle

def main():
    classifierDumpFile = 'naivebayes_test_model.pickle'
    f1 = open(classifierDumpFile, 'rb')
    classifier = pickle.load(f1)
    t = "i was happy"
    print(classifier)
    label = classifier.classify("life")
    print(label)

if __name__ == '__main__': main()