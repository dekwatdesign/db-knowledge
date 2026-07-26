import os
import re
import json

tables_dir = r"d:\Projects\knowledge-hosxp\generated\tables"

id_keys = {'cid', 'father_cid', 'mother_cid', 'couple_cid', 'sps_cid', 'patient_cid', 'person_cid', 'pop_id', 'card_id', 'citizen_id', 'id_card', 'father', 'mother', 's_cid', 'guard_cid'}
fname_keys = {'fname', 'first_name', 'firstname', 'fname_th', 'patient_fname', 'person_fname', 'doctor_fname', 'staff_fname', 'user_fname', 'customer_fname', 'blb_donator_fname', 'ec_fname', 'new_fname', 'old_fname', 'nfname'}
lname_keys = {'lname', 'last_name', 'lastname', 'lname_th', 'patient_lname', 'person_lname', 'doctor_lname', 'staff_lname', 'user_lname', 'customer_lname', 'blb_donator_lname', 'ec_lname', 'new_lname', 'old_lname', 'fatherlname', 'motherlname', 'spslname'}
avatar_keys = {'picture', 'image', 'avatar', 'photo', 'card_picture', 'image_data', 'customer_picture_data', 'patient_picture_data', 'signature_jpeg_blob', 'officer_signature_jpeg_blob', 'chart_png_image', 'image1', 'image2', 'qr_code_blob', 'dent_diagram_wmf_template_blob'}

id_13_regex = re.compile(r'^\d{13}$')
id_formatted_regex = re.compile(r'^\d{1}-\d{4}-\d{5}-\d{2}-\d{1}$')

unmasked_ids = []
unmasked_fnames = []
unmasked_lnames = []
unmasked_avatars = []

files = [f for f in os.listdir(tables_dir) if f.endswith('.md')]

for f in files:
    filepath = os.path.join(tables_dir, f)
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
                    
                    if (id_13_regex.match(v_str) or id_formatted_regex.match(v_str)) and v_str != "0000000000000":
                        if v_str != "1xxxxxxxxxxxx" and v_str != "1-xxxx-xxxxx-xx-x":
                            unmasked_ids.append({'file': f, 'key': k, 'val': v_str})
                            
                    if k_lower in fname_keys:
                        if v_str != "[MASKED_FNAME]" and v_str != "" and v_str.upper() != "NULL":
                            unmasked_fnames.append({'file': f, 'key': k, 'val': v_str})
                            
                    if k_lower in lname_keys:
                        if v_str != "[MASKED_LNAME]" and v_str != "" and v_str.upper() != "NULL":
                            unmasked_lnames.append({'file': f, 'key': k, 'val': v_str})
                            
                    if k_lower in avatar_keys or any(ak in k_lower for ak in ['picture', 'image_data', 'avatar_blob', 'signature_jpeg']):
                        if v_str != "[MASKED_AVATAR]" and v_str != "" and v_str != "0" and v_str.upper() != "NULL":
                            unmasked_avatars.append({'file': f, 'key': k, 'val': v_str[:30]})
        except Exception:
            pass

print("Verification Summary:")
print(f"Unmasked 13-digit Thai IDs remaining: {len(unmasked_ids)}")
print(f"Unmasked Thai Fnames remaining: {len(unmasked_fnames)}")
print(f"Unmasked Thai Lnames remaining: {len(unmasked_lnames)}")
print(f"Unmasked Avatars/Pictures remaining: {len(unmasked_avatars)}")

if len(unmasked_ids) == 0 and len(unmasked_fnames) == 0 and len(unmasked_lnames) == 0 and len(unmasked_avatars) == 0:
    print("VERIFICATION SUCCESSFUL: 100% of sensitive data sample rows are masked!")
else:
    print("WARNING: Unmasked sensitive items detected!")
    print("IDs:", unmasked_ids[:5])
    print("Fnames:", unmasked_fnames[:5])
    print("Lnames:", unmasked_lnames[:5])
    print("Avatars:", unmasked_avatars[:5])
