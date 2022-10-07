from pyautogui import *
import pyautogui
import time
import keyboard
import win32api, win32con
import tkinter as tk
from tkinter import ttk
from getmac import get_mac_address as gma
from urllib.request import urlopen
import cv2
from numpy import random


#random.randint(x,y)

def checkAccess(deactivationYear,deactivationMonth,deactivationDay):
    res = urlopen('http://just-the-time.appspot.com/')
    result = res.read().strip()
    result_str = result.decode('utf-8')
    result_str2 = result_str.split(' ') 
    date = result_str2[0]
    date1 = date.split('-')
    Today = datetime.date(int(date1[0]), int(date1[1]), int(date[2]))
    deactivationDate = datetime.date(deactivationYear,deactivationMonth,deactivationDay)
    
    return deactivationDate > Today
time.sleep(5)


mac = gma()



def popupmsg(msg):
    time.sleep(1)
    LARGE_FONT= ("Verdana", 12)
    NORM_FONT = ("Helvetica", 10)
    SMALL_FONT = ("Helvetica", 8)
    
    popup = tk.Tk()
    popup.wm_title("PLEASE READ THIS")
    label = ttk.Label(popup, text=msg, font=LARGE_FONT)
    label.pack(side="top", fill="x", pady=50)
    B1 = ttk.Button(popup, text="Okay", command = popup.destroy)
    B1.pack()
    popup.mainloop()
    


    
def FindExit (L=38):
    for monty in [0.95,0.90,0.85,0.80,0.75,0.70,0.65,0.60,0.55]:
        for i in range(1,L+1):
            FindExit = pyautogui.locateCenterOnScreen(f'Library\\Close{i}.png' , region=(0, 0, 1920, 1080), grayscale = True, confidence=monty)
            if FindExit is not None:
                pyautogui.moveTo(FindExit)
                time.sleep (1)
                pyautogui.click() 
                time.sleep (10)
                print(f' Close : {i}')
                print(f' Conf : {monty}')
                return True
    return False
                
                
                
                 
                                    
def RestartAtlas ():
    Restart = pyautogui.locateCenterOnScreen('Library\\WindowMan.png', region=(0, 0, 1920, 1080), grayscale = True, confidence=0.70)
    if Restart is not None:
        pyautogui.moveTo(Restart)
        time.sleep (1)
        pyautogui.click() 
        time.sleep (5)
        
        Closeall = pyautogui.locateCenterOnScreen('Library\\clearall.png', region=(0, 0, 1920, 1080), grayscale = True, confidence=0.70)
    
        if Closeall is not None:
            pyautogui.moveTo(Closeall)
            time.sleep (1)
            pyautogui.click() 
            time.sleep (1)         
            FindAtlaslogo = pyautogui.locateCenterOnScreen('Library\\AtlasEarthStart.png', region=(0, 0, 1920, 1080), grayscale = True, confidence=0.70)
            if FindAtlaslogo is not None:
                pyautogui.moveTo(FindAtlaslogo)
                time.sleep (1)
                pyautogui.click() 
                time.sleep (120)            
                return True
            else:
                print('1')
                return False   
        else:
            print('2')
            return False 
    else:
        print('3')
        return False 
                
                 
                    
def FindContinue ():
        FindContinue = pyautogui.locateCenterOnScreen('Library\\AfterAdClose.png', region=(0, 0, 1920, 1080), grayscale = True, confidence=0.50)
        if FindContinue is not None:
            pyautogui.moveTo(FindContinue)
            time.sleep (1)
            pyautogui.click() 
            time.sleep (random.randint(3,5))
            return True
        else:
            return False
        

def Findback ():
        findback = pyautogui.locateCenterOnScreen('Library\\Back.png', region=(0, 0, 1920, 1080), grayscale = True, confidence=0.50)
        if findback is not None:
            pyautogui.moveTo(findback)
            time.sleep (1)
            pyautogui.click() 
            time.sleep (1)
            return True
        else:
            return False


def FindNoAdAv():
    
        NoAdsAv = pyautogui.locateCenterOnScreen('Library\\NoAdAvailable.png', region=(0, 0, 1920, 1080), grayscale = True, confidence=0.50)
        if NoAdsAv is not None:
            pyautogui.moveTo(NoAdsAv)
            time.sleep (1)
            pyautogui.click() 
            time.sleep (1)
            return True
        else:
            return False
        
def FindNointernet():
    
        Nointernet = pyautogui.locateCenterOnScreen('Library\\NoInternet.png', region=(0, 0, 1920, 1080), grayscale = True, confidence=0.80)
        if Nointernet is not None:
            pyautogui.moveTo(Nointernet)
            time.sleep (1)
            pyautogui.click() 
            time.sleep (1)
            return True
        else:
            return False


def findshop2():
    findShopClick =  pyautogui.locateCenterOnScreen('Library\\Shop.png', region=(0, 0, 1920, 1080), confidence=0.65)
        
    if findShopClick is not None:
        return True
    else:
        return False
    
    
def findBoostStart():
    time.sleep(random.randint(3,7))
    findBoostStart = pyautogui.locateCenterOnScreen('Library\\BoostAvailable.png', region=(0, 0, 1920, 1080), confidence=0.65)
    if findBoostStart is not None:
        pyautogui.moveTo(findBoostStart)
        time.sleep (1)
        pyautogui.click() 
        time.sleep (1)

        findBoostAdClick = pyautogui.locateCenterOnScreen('Library\\BoostWatchAd.png', region=(0, 0, 1920, 1080), confidence=0.65)

        if findBoostAdClick is not None:
            pyautogui.moveTo(findBoostAdClick)
            time.sleep (1)
            pyautogui.click() 
            time.sleep (random.randint(80,95))
            
            FoundExit = FindExit()
            
            if FoundExit == True:
                FoundShop2 = findshop2()

                while FoundShop2 == False : 
                    time.sleep(2)
                    FindExit()
                    time.sleep(2)
                    FoundShop2 = findshop2()
                    time.sleep(2)
                return True
            
            
            
            else:
                print('New exit Please screenshot it ')  
                res = RestartAtlas()
                if res == False: 
                    return False    
                
                
                
def findshop():
    findShopClick =  pyautogui.locateCenterOnScreen('Library\\Shop.png', region=(0, 0, 1920, 1080), confidence=0.65)
        
    if findShopClick is not None:
        pyautogui.moveTo(findShopClick)
        time.sleep (1)
        pyautogui.click() 
        time.sleep (1)
        pyautogui.moveRel(0,-200)
        time.sleep (3)
        pyautogui.dragTo( 100, 200, 13, button='left')
        time.sleep (3)            
        return True
                
    else : 
        return False
                
                
def findfreead():
    clickAd = pyautogui.locateCenterOnScreen('Library\\Free.png', region=(0, 0, 1920, 1080), confidence=0.60)
    if clickAd is not None: 
                    pyautogui.moveTo(clickAd)
                    time.sleep (1)
                    pyautogui.click()
                    time,sleep(1)   
                    return True       
    else:
        return False
                                           
Cycle = 0
Adclick =  random.randint(5,15) + Cycle       # Replace the 0 with a random.randint functiion 
popupmsg(''' 
WELCOME TO ATLAS EARTH AUTO SCRIPT V1.0
PLEASE USE RECOMMENDED SCREEN RESOLUTION 
OF 1920, 1080 OR AS CLOSE AS YOU CAN GET IT.
ALSO AFTER YOU START PROGRAM PLEASE MINIMIZE AND OPEN 
GAME SCREEN TO MAX SIZE SO BOT CAN FUNCTION PROPERLY
ALSO IF YOUR SHOP HAS TROUBLE LOADING OR YOUR GAME
IS NOT LOADING PROPERLY, OR THEIR ARE NO AVAILABLE ADS..
THAT USUALLY MEANS YOUR INTERENET CONNNECTION IS
NOT GOOD AND YOU SHOULD TRY RESOLVING THIS.
ALSO USING ETHER CABLE DIRECTLY CONNECTED TO 
ROUTER GIVES MUCH BETTER RESULTS THEN WIFI.    ''')
time.sleep(5)
while True:
    # if mac in[ '00:68:eb:c6:0b:e0'] and checkAccess(2050,8,29):

        findShopClick = findshop()
        if findShopClick == True:
            print('Shop Found')
            isThereAds = FindNoAdAv()
            if isThereAds == False:
                clickAd = findfreead()
                if clickAd == True:
                    print('Ad Found')
                    if Cycle == Adclick :
                        time.sleep(10)
                        pyautogui.click()
                        time.sleep(10)                      
                        Foundback = Findback()
                        time.sleep(2)
                        if Foundback == True :
                            Adclick = Cycle + random.randint((3,15))                         # Replace the 5 with a random.randint functiion 
                        else : 
                            print('could not skip ad \n')
                            res = RestartAtlas()
                            if res == False:
                                time.sleep(1200)
                                break
                                
                    time.sleep (random.randint(80,100))
                    FoundExit = FindExit()
                    if FoundExit == True :
                        time.sleep(10)
                        Foundcon = FindContinue() 
                        while Foundcon == False :
                            time.sleep(15)
                            FindExit()
                            time.sleep(5)
                            Foundcon = FindContinue()
                            print('Continue wasnt found yet')
                        print('Continue Found')
                    else : 
                        print('New exit Please screenshot it ')  
                        res = RestartAtlas()
                        if res == False:
                            print(4)
                            time.sleep(1200)
                            break
                else:
                    print("Ad Not Available")
                    res = RestartAtlas ()
                    if res == False:
                        print(5)
                        time.sleep(1200)
                        break
        else:
            print("Shop Not Found")
            res = RestartAtlas()
            if res == False:
                print(6)
                break
        Cycle = Cycle + 1 
        print(f'Cycle : {Cycle}')
        findBoostStart()
        time.sleep(random.randint(1100,1300))
    # else:
    #     popupmsg('You are not allowed to use this')
    #     time.sleep(1200)
    #     break
    # except:
        # pass
