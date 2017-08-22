package hudson.plugins.hello_world;

import hudson.model.Action;

/**
 * Exposes a read only API for non-perfect uri's. Intended for 
 * use with the JenkinsStatus Alexa Skill.
 * 
 * @author Alex Johnson alexbrjo
 */
public class FuzzyApiAction implements Action {

    public FuzzyApiAction() {
        
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
