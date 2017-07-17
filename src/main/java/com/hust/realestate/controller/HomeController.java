/***************************************************************************
 * Copyright HomeDirect - All rights reserved.                *    
 **************************************************************************/
package com.hust.realestate.controller;

import com.hust.realestate.model.UserRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Author : Quang Tran Dang
 * Email: quang.trandang@homedirect.com
 * 05/07/2017
 */

@Controller
public class HomeController {

    List<String> mang = new ArrayList<>(Arrays.asList("Quang", "Nga", "Linh", "Lan"));

    @RequestMapping(value = {"/"})
    public ModelAndView home() {
        return new ModelAndView("index");
    }

    @RequestMapping(value = {"/login"})
    public ModelAndView login(){
        return new ModelAndView("login");
    }

    @RequestMapping(value = {"/vue"})
    public ModelAndView vue() {
        return new ModelAndView("vue");
    }

    @RequestMapping(value = {"/react"})
    public String test() {
        return "home";
    }

    @RequestMapping(value = {"/getData"}, method = RequestMethod.POST)
    public @ResponseBody
    Object getData() {
        return mang;
    }

    @RequestMapping(value = {"/add"}, method = RequestMethod.POST)
    public @ResponseBody
    Object add(@RequestBody UserRequest request) {
        System.out.println("----------------> " + request.getName());
        mang.add(request.getName());
        System.out.println(mang);
        return mang;
    }

    @RequestMapping(value = {"/delete"}, method = RequestMethod.POST)
    public @ResponseBody
    Object delete(@RequestBody UserRequest request) {
        System.out.println("id: " + request.getId());
        mang.remove(mang.get(request.getId()));
        System.out.println("size: " + mang.size());
        return mang;
    }

    @RequestMapping(value = {"/save"}, method = RequestMethod.POST)
    public @ResponseBody Object save(@RequestBody UserRequest request){
        mang.set(request.getId(), request.getName());
        return mang;
    }
}
