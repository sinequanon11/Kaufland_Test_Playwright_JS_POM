import { test, expect } from '@playwright/test';

import {LoginPage} from '../pages/login.page'
import {ShoppingPage} from '../pages/shopping.page'
import {DeliveryInfo} from '../pages/deliveryInfo.page'
import {Logout} from '../pages/logout.page'

test('Kaufland Login, Shopping, Logout Test', async ({ page }) => {

  const LogIn = new LoginPage(page)
  const Shopping = new ShoppingPage(page)
  const Delivery = new DeliveryInfo(page)
  const LogOut = new Logout (page)

  await LogIn.goToLoginPage()
  await LogIn.login('ValidEmailAddress', 'ValidPassword') 
  await expect(page.locator("//div[@class='k-card__content']")).toContainText(" Meine Kaufland Card ")

  await Shopping.shopping('Kuhmilch')
  await expect(page.locator(".unit-widget-unit__title")).toContainText("Kuhmilch");

  await Delivery.deliveryInfo('Müller Strasse', '22', 'Ort', 'Burg') 

  await LogOut.logout()
  await expect(page.locator("//span[@class='rd-aw-login__text']")).toContainText('Anmelden')

});