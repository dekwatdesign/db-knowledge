import os
import re
import json

tables_dir = r"d:\Projects\knowledge-hosxp\generated\tables"

id_keys = {'cid', 'father_cid', 'mother_cid', 'couple_cid', 'sps_cid', 'patient_cid', 'person_cid', 'pop_id', 'card_id', 'citizen_id', 'id_card', 'pid', 'father', 'mother', 's_cid', 'guard_cid'}
fname_keys = {'fname', 'first_name', 'firstname', 'fname_th', 'patient_fname', 'person_fname', 'doctor_fname', 'staff_fname', 'user_fname', 'customer_fname', 'blb_donator_fname', 'ec_fname', 'new_fname', 'old_fname', 'nfname'}
lname_keys = {'lname', 'last_name', 'lastname', 'lname_th', 'patient_lname', 'person_lname', 'doctor_lname', 'staff_lname', 'user_lname', 'customer_lname', 'blb_donator_lname', 'ec_lname', 'new_lname', 'old_lname', 'fatherlname', 'motherlname', 'spslname'}
soundex_keys = {'fname_soundex', 'lname_soundex'}
avatar_keys = {'picture', 'image', 'avatar', 'photo', 'card_picture', 'image_data', 'customer_picture_data', 'patient_picture_data', 'signature_jpeg_blob', 'officer_signature_jpeg_blob', 'chart_png_image', 'image1', 'image2', 'qr_code_blob', 'dent_diagram_wmf_template_blob'}

id_13_regex = re.compile(r'^\d{13}$')
id_formatted_regex = re.compile(r'^\d{1}-\d{4}-\d{5}-\d{2}-\d{1}$')

modified_files_count = 0
modified_file_list = []
total_ids = 0
total_fnames = 0
total_lnames = 0
total_avatars = 0

for fname in os.listdir(tables_dir):
    if not fname.endswith('.md'):
        continue
    
    filepath = os.path.join(tables_dir, fname)
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as fh:
        content = fh.read()
    
    # We find json blocks and update them while preserving original structure
    def replace_json_block(match):
        global total_ids, total_fnames, total_lnames, total_avatars
        json_str = match.group(1)
        try:
            data = json.loads(json_str)
            if not isinstance(data, list):
                return match.group(0)
            
            block_changed = False
            for row in data:
                if not isinstance(row, dict):
                    continue
                
                for k, v in list(row.items()):
                    if v is None:
                        continue
                    v_str = str(v).strip()
                    k_lower = k.lower()
                    
                    # 1. ID masking
                    if k_lower in id_keys or id_13_regex.match(v_str) or id_formatted_regex.match(v_str):
                        if (id_13_regex.match(v_str) or id_formatted_regex.match(v_str)) and v_str != "0000000000000":
                            if id_formatted_regex.match(v_str):
                                row[k] = "1-xxxx-xxxxx-xx-x"
                            else:
                                row[k] = "1xxxxxxxxxxxx"
                            total_ids += 1
                            block_changed = True
                            
                    # 2. Fname masking
                    if k_lower in fname_keys:
                        if v_str != "" and v_str.upper() != "NULL":
                            row[k] = "[MASKED_FNAME]"
                            total_fnames += 1
                            block_changed = True
                            
                    # 3. Lname masking
                    if k_lower in lname_keys:
                        if v_str != "" and v_str.upper() != "NULL":
                            row[k] = "[MASKED_LNAME]"
                            total_lnames += 1
                            block_changed = True

                    # Soundex masking
                    if k_lower in soundex_keys:
                        if v_str != "" and v_str.upper() != "NULL":
                            row[k] = "[MASKED_SOUNDEX]"
                            block_changed = True
                            
                    # 4. Avatar/Picture masking
                    if k_lower in avatar_keys or any(ak in k_lower for ak in ['picture', 'image_data', 'avatar_blob', 'signature_jpeg']):
                        if v_str != "" and v_str != "0" and v_str.upper() != "NULL":
                            row[k] = "[MASKED_AVATAR]"
                            total_avatars += 1
                            block_changed = True
                            
            if block_changed:
                return "```json\n" + json.dumps(data, ensure_ascii=False, indent=2) + "\n```"
        except Exception:
            pass
        return match.group(0)

    new_content, n_subs = re.subn(r'```json\s*([\s\S]*?)\s*```', replace_json_block, content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as fh:
            fh.write(new_content)
        modified_files_count += 1
        modified_file_list.append(fname)

print("Data Masking Complete!")
print(f"Total Modified Files: {modified_files_count}")
print(f"Total IDs Masked: {total_ids}")
print(f"Total Fnames Masked: {total_fnames}")
print(f"Total Lnames Masked: {total_lnames}")
print(f"Total Avatars/Pictures Masked: {total_avatars}")

with open('mask_summary.json', 'w', encoding='utf-8') as sf:
    json.dump({
        'modified_files_count': modified_files_count,
        'total_ids': total_ids,
        'total_fnames': total_fnames,
        'total_lnames': total_lnames,
        'total_avatars': total_avatars,
        'modified_files': modified_file_list
    }, sf, ensure_ascii=False, indent=2)
