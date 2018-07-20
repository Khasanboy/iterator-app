package com.example.iterator.model;

public class Response {
	
	private String activity;
	
	private String activityUrl;

	public Response() {
		super();
	}

	public Response(String activity, String activityUrl) {
		super();
		this.activity = activity;
		this.activityUrl = activityUrl;
	}

	public String getActivity() {
		return activity;
	}

	public void setActivity(String activity) {
		this.activity = activity;
	}

	public String getactivityUrl() {
		return activityUrl;
	}

	public void setactivityUrl(String activityUrl) {
		this.activityUrl = activityUrl;
	}
	
	
	

}
