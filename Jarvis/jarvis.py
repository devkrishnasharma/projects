import pyttsx3
import datetime

engine = pyttsx3.init('sapi5')
voices = engine.getProperty('voices')
engine.setProperty('voice', voices[1].id)



def speak(audio):
   engine.say(audio)
   engine.runAndWait()

   def wishMe():
      hour = int(datetime.datetime.now().hour)
      if hour>=0 and hour<=12:
         speak("Good Morning!")

      elif hour>=12 and hour<=18:
         speak("Good Afternoon")
      else:
         speak("Good Evening")

      speak("I am Your Virtual Assistant. Please Tell Me How Can I Help You")     
   


if __name__ == "__main__":
      wishMe()
