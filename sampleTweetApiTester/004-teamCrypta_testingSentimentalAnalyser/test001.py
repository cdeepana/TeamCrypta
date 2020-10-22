def main():
    import tweepy

    consumer_key = 'NAH1WU1PAQDDcuNb73w0ggRMR'
    consumer_secret = 'ihV759zxUTY0T9Z2RrT3v58mAOIb3jbdsMnfVHcfiJIS7n43Ii'
    access_token = '1268139792912572417-UydAQQo7yupeTceaXb1TbMIjWpSHyx'
    access_token_secret = 'xxz0k2csYehTSFKbOxuziHuQk2h7i7SdOXJhZssA7B0J7'

    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)

    api = tweepy.API(auth)

    public_tweets = api.home_timeline()
    for tweet in public_tweets:
        print(tweet.text)






if __name__ == '__main__': main()
