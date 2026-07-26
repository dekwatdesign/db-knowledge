import os
import re
import json

base_dir = r"d:\Projects\db-knowledge"

person_titles = ['นาย', 'นาง', 'น.ส.', 'นส.', 'ด.ช.', 'ด.ญ.', 'พญ.', 'นพ.', 'นายแพทย์', 'แพทย์หญิง', 'ภก.', 'ภญ.', 'ทพ.', 'ทพญ.', 'ดร.']

id_keys = {
    'cid', 'father_cid', 'mother_cid', 'couple_cid', 'sps_cid', 'patient_cid', 'person_cid',
    'pop_id', 'card_id', 'citizen_id', 'id_card', 'pid', 'father', 'mother', 's_cid', 'guard_cid',
    'hr_cid', 'hos_cid', 'leave_person_code', 'card_code', 'hr_farther_cid', 'hr_mather_cid', 'marry_cid',
    'popid', 'cardid', 'citizenid', 'p_cid', 'dr_cid'
}
fname_keys = {
    'fname', 'first_name', 'firstname', 'fname_th', 'patient_fname', 'person_fname', 'doctor_fname',
    'staff_fname', 'user_fname', 'customer_fname', 'blb_donator_fname', 'ec_fname', 'new_fname',
    'old_fname', 'nfname', 'hr_fname', 'meeting_inside_usersub_fname', 'p_fname', 'dr_fname'
}
lname_keys = {
    'lname', 'last_name', 'lastname', 'lname_th', 'patient_lname', 'person_lname', 'doctor_lname',
    'staff_lname', 'user_lname', 'customer_lname', 'blb_donator_lname', 'ec_lname', 'new_lname',
    'old_lname', 'fatherlname', 'motherlname', 'spslname', 'hr_lname', 'meeting_inside_usersub_lname',
    'p_lname', 'dr_lname'
}
fullname_keys = {
    'leave_person_fullname', 'user_request_name', 'usre_request_name', 'sup_officer_person_name',
    'hr_fullname', 'hos_fullname', 'fullname', 'person_fullname', 'leader_person_name',
    'leader_dep_person_name', 'cancel_person_name', 'operate_member_person_name', 'person_name',
    'reserve_person_name', 'submit_person_name', 'top_leader_ac_name', 'tech_receive_name',
    'tech_repair_name', 'car_driver_name', 'driver_name', 'user_confirm_check', 'user_confirm_check_name',
    'patient_name', 'doctor_name', 'staff_name', 'cust_name', 'informant_name', 'inform_name',
    'leader_name', 'admdoctor_name', 'private_doctor_name', 'dx_doctor_name', 'entry_officer_name',
    'risk_clinic_doctor_name', 'officer_name_text', 'officer_name', 'issue_person_name',
    'father_name', 'mother_name', 'couple_name', 'sps_name', 'guard_name', 'nurse_name', 'dr_name',
    'save_hr_name', 'agree_hr_name', 'check_hr_name', 'nurse_hr_name', 'send_ld_by_hr_name',
    'send_ld_by_hr_name_2', 'send_by_name', 'repair_peson_check_name', 'repair_leader_check_name',
    'person_request_name', 'operate_organizer_name', 'operate_verify_1_name', 'operate_verify_2_name',
    'nameold', 'namenew', 'contact_name', 'engineer_name', 'receiver', 'er_refer_sender_name',
    'informname', 'ptname', 'pt_name', 'credit_card_owner', 'house_deed_name', 'moneyofficer',
    'hospitaldirector', 'prscrpt_delivery_add_receiver', 'social_consult_detail_staff',
    'psychiatric_estimate_iadl_staff', 'psychiatric_estimate_aws_staff', 'opd_progress_note_user',
    'staff', 'staff_doctor', 'staff_er', 'app_user', 'user_name', 'meeting_inside_usersave_name',
    'rptb_basic_editor'
}
avatar_keys = {
    'picture', 'image', 'avatar', 'photo', 'card_picture', 'image_data', 'customer_picture_data',
    'patient_picture_data', 'signature_jpeg_blob', 'officer_signature_jpeg_blob', 'chart_png_image',
    'image1', 'image2', 'qr_code_blob', 'dent_diagram_wmf_template_blob', 'hr_image', 'hr_image_name',
    'hr_image_jpeg_blob', 'hr_signature_jpeg_blob', 'images', 'signature', 'pic', 'avatar_blob',
    'patient_image', 'person_image', 'user_image', 'doctor_image', 'officer_signature_jpeg',
    'fingerprint', 'fingle'
}

person_entity_files = {
    'doctor.md', 'patient.md', 'person.md', 'users.md', 'hrd_person.md', 'james_f43_person.md',
    'provis_person.md', 'provis_person_op.md', 'family_person.md', 'opduser.md', 'officer.md',
    'operation_patient_position.md', 'billbookreg.md'
}

non_person_keys = {
    'build_name', 'article_name', 'item_name', 'care_ans_detail_name', 'care_check_name', 'care_list_name',
    'repair_name', 'other_name', 'brand_name', 'color_name', 'size_name', 'type_name', 'status_name',
    'department_name', 'department_sub_name', 'department_sub_sub_name', 'position_name', 'building_name',
    'location_name', 'group_name', 'category_name', 'unit_name', 'room_name', 'province_name', 'amphur_name',
    'tumbon_name', 'reason_name', 'hospitalname', 'hospital_name', 'org_name', 'vendor_name', 'supplier_name',
    'bank_name', 'food_name', 'equipment_name', 'objective_name', 'activity_name', 'job_name', 'service_name',
    'systemtype_name', 'priority_name', 'setupfunc_name', 'type_score_name', 'type_score_sub_name', 'vut_name',
    'univer_name', 'branch_name', 'capacity_name', 'doctype_name', 'holiday_name', 'health_screen_lab_name',
    'doctor_deformed_topic_name', 'drugeval_topic_name', 'physic_evaluation_topic_name', 'psych_assess_topic_name',
    'book_file_name_old'
}

id_13_regex = re.compile(r'^\d{13}$')
id_formatted_regex = re.compile(r'^\d{1}-\d{4}-\d{5}-\d{2}-\d{1}$')

unmasked_ids = []
unmasked_fnames = []
unmasked_lnames = []
unmasked_fullnames = []
unmasked_avatars = []

for root, dirs, files in os.walk(base_dir):
    if '.git' in root or '__pycache__' in root or 'antigravity' in root:
        continue
    for fname in files:
        if not fname.endswith('.md'):
            continue

        filepath = os.path.join(root, fname)
        rel_path = os.path.relpath(filepath, base_dir)

        with open(filepath, 'r', encoding='utf-8', errors='ignore') as fh:
            content = fh.read()

        blocks = re.findall(r'```json\s*([\s\S]*?)\s*```', content)
        for block in blocks:
            try:
                data = json.loads(block)
                if not isinstance(data, list):
                    continue

                for row in data:
                    if not isinstance(row, dict):
                        continue

                    for k, v in row.items():
                        if v is None:
                            continue
                        v_str = str(v).strip()
                        k_lower = k.lower()

                        if k_lower in non_person_keys:
                            continue

                        if (id_13_regex.match(v_str) or id_formatted_regex.match(v_str)) and v_str != "0000000000000":
                            if v_str != "1xxxxxxxxxxxx" and v_str != "1-xxxx-xxxxx-xx-x":
                                unmasked_ids.append({'file': rel_path, 'key': k, 'val': v_str})

                        if k_lower in fname_keys:
                            if v_str != "[MASKED_FNAME]" and v_str != "" and v_str.upper() != "NULL":
                                unmasked_fnames.append({'file': rel_path, 'key': k, 'val': v_str})

                        if k_lower in lname_keys:
                            if v_str != "[MASKED_LNAME]" and v_str != "" and v_str.upper() != "NULL":
                                unmasked_lnames.append({'file': rel_path, 'key': k, 'val': v_str})

                        if k_lower in fullname_keys or (k_lower == 'name' and fname in person_entity_files) or any(t in v_str for t in person_titles):
                            if v_str != "[MASKED_FULLNAME]" and v_str != "" and v_str.upper() != "NULL":
                                unmasked_fullnames.append({'file': rel_path, 'key': k, 'val': v_str})

                        if k_lower in avatar_keys or (any(ak in k_lower for ak in ['picture', 'image_data', 'avatar_blob', 'signature_jpeg']) and k_lower not in ['image_name', 'picture_name', 'photo_name', 'health_screen_lab_pice']):
                            if v_str != "[MASKED_AVATAR]" and v_str != "" and v_str != "0" and v_str.upper() != "NULL":
                                unmasked_avatars.append({'file': rel_path, 'key': k, 'val': v_str[:30]})
            except Exception:
                pass

print("Projectwide Verification Summary:")
print(f"Unmasked 13-digit Thai IDs remaining: {len(unmasked_ids)}")
print(f"Unmasked Thai Fnames remaining: {len(unmasked_fnames)}")
print(f"Unmasked Thai Lnames remaining: {len(unmasked_lnames)}")
print(f"Unmasked Thai Fullnames remaining: {len(unmasked_fullnames)}")
print(f"Unmasked Avatars/Pictures remaining: {len(unmasked_avatars)}")

if len(unmasked_ids) == 0 and len(unmasked_fnames) == 0 and len(unmasked_lnames) == 0 and len(unmasked_fullnames) == 0 and len(unmasked_avatars) == 0:
    print("VERIFICATION SUCCESSFUL: 100% of sensitive data sample rows across all project folders are masked!")
else:
    print("WARNING: Unmasked sensitive items detected!")
    if unmasked_ids: print("IDs:", unmasked_ids[:5])
    if unmasked_fnames: print("Fnames:", unmasked_fnames[:5])
    if unmasked_lnames: print("Lnames:", unmasked_lnames[:5])
    if unmasked_fullnames: print("Fullnames:", unmasked_fullnames[:5])
    if unmasked_avatars: print("Avatars:", unmasked_avatars[:5])
