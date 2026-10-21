use serde_json::Value;
use std::collections::HashSet;

pub struct MaskEngine {
    id_keys: HashSet<&'static str>,
    fname_keys: HashSet<&'static str>,
    lname_keys: HashSet<&'static str>,
    fullname_keys: HashSet<&'static str>,
    avatar_keys: HashSet<&'static str>,
}

impl Default for MaskEngine {
    fn default() -> Self {
        let id_keys = [
            "cid", "father_cid", "mother_cid", "couple_cid", "sps_cid", "patient_cid", "person_cid",
            "pop_id", "card_id", "citizen_id", "id_card", "pid", "father", "mother", "s_cid", "guard_cid",
            "hr_cid", "hos_cid", "leave_person_code", "card_code", "popid", "cardid", "citizenid", "p_cid", "dr_cid"
        ].into_iter().collect();

        let fname_keys = [
            "fname", "first_name", "firstname", "fname_th", "patient_fname", "person_fname", "doctor_fname",
            "staff_fname", "user_fname", "customer_fname", "p_fname", "dr_fname", "nfname", "hr_fname"
        ].into_iter().collect();

        let lname_keys = [
            "lname", "last_name", "lastname", "lname_th", "patient_lname", "person_lname", "doctor_lname",
            "staff_lname", "user_lname", "customer_lname", "p_lname", "dr_lname", "hr_lname"
        ].into_iter().collect();

        let fullname_keys = [
            "fullname", "person_fullname", "patient_name", "doctor_name", "staff_name", "cust_name",
            "ptname", "pt_name", "user_name", "app_user", "dr_name", "nurse_name", "informant_name"
        ].into_iter().collect();

        let avatar_keys = [
            "picture", "image", "avatar", "photo", "card_picture", "image_data", "patient_picture_data",
            "signature_jpeg_blob", "hr_image"
        ].into_iter().collect();

        Self {
            id_keys,
            fname_keys,
            lname_keys,
            fullname_keys,
            avatar_keys,
        }
    }
}

impl MaskEngine {
    pub fn mask_row(&self, row: &mut serde_json::Map<String, Value>) {
        for (key, val) in row.iter_mut() {
            let lower_key = key.to_lowercase();

            if self.id_keys.contains(lower_key.as_str()) {
                if let Value::String(s) = val {
                    *val = Value::String(self.mask_cid(s));
                }
            } else if self.fname_keys.contains(lower_key.as_str()) {
                if let Value::String(_) = val {
                    *val = Value::String("สมชาย [จำลอง]".to_string());
                }
            } else if self.lname_keys.contains(lower_key.as_str()) {
                if let Value::String(_) = val {
                    *val = Value::String("ใจดี [จำลอง]".to_string());
                }
            } else if self.fullname_keys.contains(lower_key.as_str()) {
                if let Value::String(_) = val {
                    *val = Value::String("นาย สมชาย ใจดี [จำลอง]".to_string());
                }
            } else if self.avatar_keys.contains(lower_key.as_str()) {
                *val = Value::String("<masked image data>".to_string());
            }
        }
    }

    fn mask_cid(&self, cid: &str) -> String {
        let clean: String = cid.chars().filter(|c| c.is_ascii_digit()).collect();
        if clean.len() == 13 {
            format!("{}-{}XXX-XXXXX-{}-{}", &clean[0..1], &clean[1..2], &clean[11..12], &clean[12..13])
        } else if clean.len() > 6 {
            format!("{}****{}", &clean[..2], &clean[clean.len()-2..])
        } else {
            "******".to_string()
        }
    }
}
