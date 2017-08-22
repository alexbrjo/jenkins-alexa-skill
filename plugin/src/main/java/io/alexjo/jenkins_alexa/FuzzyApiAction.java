package hudson.plugins.hello_world;

import hudson.model.Action;
import hudson.model.Job;
import hudson.model.Items;
import jenkins.model.Jenkins;

/**
 * Exposes a read only API for non-perfect uri's. Intended for 
 * use with the JenkinsStatus Alexa Skill.
 * 
 * @author Alex Johnson alexbrjo
 */
public class FuzzyApiAction implements Action {

    public FuzzyApiAction() {
        
    }
    
    public Job jobStatus (String fuzzyName) {
        return Items.findNearest(Job.class, fuzzyName, Jenkins.getActiveInstance());
    }
    
    public String getDisplayName() {
        return "Fuzzy API";
    }
    
    public String getUrlName() {
        return "fuzzy-api";
    }
    
    public String getIconFileName() {
        return "ClipBoard.png";
    }

}
