# `system_setting_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| system_setting_list_id | int(11) | NO | PRI | 0 |  |  |
| system_setting_module_id | int(11) | YES |  | NULL |  |  |
| sys_var_name | varchar(200) | YES | UNI | NULL |  |  |
| setting_description | text | YES |  | NULL |  |  |
| setting_name | varchar(200) | YES |  | NULL |  |  |
| setting_value_type | varchar(10) | YES |  | NULL |  |  |
| number_min_value | int(11) | YES |  | NULL |  |  |
| number_max_value | int(11) | YES |  | NULL |  |  |
| code_lookup_table | varchar(200) | YES |  | NULL |  |  |
| code_lookup_key_field | varchar(200) | YES |  | NULL |  |  |
| code_lookup_list_field | varchar(200) | YES |  | NULL |  |  |
| lookup_description | varchar(200) | YES |  | NULL |  |  |
| sys_order_code | varchar(5) | YES |  | NULL |  |  |
| code_integer | char(1) | YES |  | NULL |  |  |
| full_description | varchar(2000) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_unique_name | sys_var_name | yes | 1 |
| PRIMARY | system_setting_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "system_setting_list_id": 1,
    "system_setting_module_id": 1,
    "sys_var_name": "hn_digit",
    "setting_description": "จำนวนหลักของหมายเลข HN ตอนนี้ระบบจะรองรับ 7 - 9 หลัก แต่ค่าปกติคือ 9 หลัก ระบบ HN ของ HOSxP จะใส่ 0 นำหน้าหมายเลข HN จนกว่าความยาวจะได้ตามหลักที่กำหนด",
    "setting_name": "จำนวนหลักของ HN",
    "setting_value_type": "Number",
    "number_min_value": 9,
    "number_max_value": 9,
    "code_lookup_table": null,
    "code_lookup_key_field": null,
    "code_lookup_list_field": null,
    "lookup_description": null,
    "sys_order_code": "A3",
    "code_integer": null,
    "full_description": "จำนวนหลักของ HN | ไฟล์: HOSxPDMU.pas, MainModule.pas, HOSxPNutritionConsultFunctionUnit.pas, RtcClientUnit.pas, HOSxPLabPathoLibUnit.pas | การใช้งาน: แปลงค่าผ่าน `StrToInt` เป็น `FHNDigit` ค่าเริ่มต้นเป็น 9 เมื่อเกิด exception ใช้ในฟังก์ชัน `_GetCheckNewHN` เพื่อเติมศูนย์นำหน้า HN ให้ได้ความยาวที่ถูกต้อง | ผลกระทบ: ควบคุมความกว้างการแสดงผลของ Hospital Number (HN) HN ที่สั้นกว่าค่านี้จะถูกเติมศูนย์นำหน้า สำคัญมากสำหรับการแสดง HN ที่สม่ำเสมอทั่วทั้งระบบ | ค่าแนะนำ: 9 (มาตรฐานสำหรับโรงพยาบาลส่วนใหญ่; ปรับตามจำนวนผู้ป่วย)"
  },
  {
    "system_setting_list_id": 2,
    "system_setting_module_id": 1,
    "sys_var_name": "an_digit",
    "setting_description": "จำนวนหลักของหมายเลข AN ตอนนี้ระบบจะรองรับ 7 - 9 หลัก แต่ค่าปกติคือ 9 หลัก ระบบ AN ของ HOSxP จะใส่ 0 นำหน้าหมายเลข AN จนกว่าความยาวจะได้ตามหลักที่กำหนด",
    "setting_name": "จำนวนหลักของ AN",
    "setting_value_type": "Number",
    "number_min_value": 7,
    "number_max_value": 9,
    "code_lookup_table": null,
    "code_lookup_key_field": null,
    "code_lookup_list_field": null,
    "lookup_description": "",
    "sys_order_code": "A4",
    "code_integer": null,
    "full_description": "จำนวนหลักของ AN | ไฟล์: HOSxPDMU.pas (ApplicationDB and backup), HOSxPQRCodePaymentFormUnit.pas, MainModule.pas | การใช้งาน: กำหนดค่า: `FANDigit := strtoint(GetHOSVariable('an_digit'))` พร้อม exception handler ที่ตั้งค่าเริ่มต้นเป็น 9 ใน QRPayment จะเปรียบเทียบกับ `Length(FVN)` เพื่อตรวจสอบว่า VN เป็น AN ของ IPD หรือไม่ ใช้ทั่วทั้งระบบสำหรับการจัดรูปแบบ/ตรวจสอบ AN | ผลกระทบ: ควบคุมจำนวนหลักคงที่ของเลข admission ค่าเริ่มต้นคือ 9 หากแปลงค่าล้มเหลว มีผลต่อการสร้าง AN การจัดรูปแบบ และตรรกะการแยก IPD/OPD | ค่าแนะนำ: 9 (ค่าทั่วไป; ต้องตรงกับรูปแบบเลข AN ของโรงพยาบาล)"
  },
  {
    "system_setting_list_id": 3,
    "system_setting_module_id": 1,
    "sys_var_name": "hospital_code",
    "setting_description": "รหัสมาตรฐาน สนย. ของสถานบริการแห่งนี้",
    "setting_name": "รหัสหน่วยให้บริการ (สนย.)",
    "setting_value_type": "Code",
    "number_min_value": null,
    "number_max_value": null,
    "code_lookup_table": "hospcode",
    "code_lookup_key_field": "hospcode",
    "code_lookup_list_field": "concat(hosptype,\" \",name)",
    "lookup_description": null,
    "sys_order_code": "A1",
    "code_integer": null,
    "full_description": "รหัสสถานพยาบาล | ไฟล์: HOSxPDMU.pas, HOSxPSystemSettingGridViewFrameUnit.pas, BMSAccountMenuInitUnit.pas | การใช้งาน: กำหนดค่าให้ `fhospitalcode` รวมถึง sync กับตาราง opdconfig ระบบตรวจสอบว่ารหัสมี 9 หลักหรือไม่และสร้าง hospital_code_9_digit ใช้ทั่วทั้งระบบสำหรับระบุสถานพยาบาล | ผลกระทบ: ตัวระบุหลักของระบบที่ใช้ทั่วทั้งระบบสำหรับการระบุโรงพยาบาล การรายงาน การเบิกจ่าย และการแลกเปลี่ยนข้อมูล sync กับตาราง opdconfig | ค่าแนะนำ: (รหัสสถานพยาบาล 5 หลักจากกระทรวงสาธารณสุข เช่น 10670)"
  },
  {
    "system_setting_list_id": 4,
    "system_setting_module_id": 1,
    "sys_var_name": "hospital_name",
    "setting_description": "ปกติชื่อหน่วยให้บริการจะ Update อัตโนมัติตามรหัสหน่วยให้บริการ แต่หาก ชื่อหน่วยงานแสดงไม่ถูกต้อง สามารถแก้ไขได้ที่ ตั้งค่าตัวนี้",
    "setting_name": "ชื่อหน่วยให้บริการ",
    "setting_value_type": "Text",
    "number_min_value": null,
    "number_max_value": null,
    "code_lookup_table": null,
    "code_lookup_key_field": null,
    "code_lookup_list_field": null,
    "lookup_description": null,
    "sys_order_code": "A2",
    "code_integer": null,
    "full_description": "ชื่อโรงพยาบาล | ไฟล์: HOSxPDMU.pas, HOSxPSystemSettingGridViewFrameUnit.pas | การใช้งาน: กำหนดค่าให้ `fhospitalname` รวมถึงเขียนลง opdconfig.hospitalname ค่าเริ่มต้นเป็น 'Unknown' หากว่างเปล่า | ผลกระทบ: แสดงทั่วทั้งแอปพลิเคชันเป็นชื่อโรงพยาบาล ปรากฏบนเอกสารที่พิมพ์และใบรับรองดิจิทัลทั้งหมด | ค่าแนะนำ: (ชื่อโรงพยาบาลอย่างเป็นทางการภาษาไทย)"
  },
  {
    "system_setting_list_id": 5,
    "system_setting_module_id": 3,
    "sys_var_name": "xe_force_doctor_dx_before_save",
    "setting_description": "หากต้องการให้ระบบตรวจสอบว่าต้องมีผลการวินิจฉัยก่อนบันทึก ให้กำหนดที่ตั้งค่าตัวนี้",
    "setting_name": "บังคับให้ลงผลวินิจฉัยก่อนบันทึกรายการ",
    "setting_value_type": "Check",
    "number_min_value": null,
    "number_max_value": null,
    "code_lookup_table": null,
    "code_lookup_key_field": null,
    "code_lookup_list_field": null,
    "lookup_description": null,
    "sys_order_code": "Z",
    "code_integer": null,
    "full_description": "บังคับให้แพทย์ต้องลงผลวินิจฉัยโรค (Diagnosis) ก่อนบันทึกรายการในหน้าจอ Doctor Workbench หากยังไม่มีรหัส ICD10 จะไม่สามารถบันทึกการรักษาได้ | ไฟล์: DoctorWorkBenchEntryFrameUnit.pas, HOSxPDentalWorkbenchEntryFrameUnit.pas, HOSxPDoctorOnstopServiceEntryFormUnit.pas | ผลกระทบ: เปิด Y = บังคับลง Dx ก่อนบันทึก ปิด N = บันทึกได้โดยไม่ต้องลง Dx | ค่าแนะนำ: Y (บังคับลงวินิจฉัย)"
  },
  {
    "system_setting_list_id": 6,
    "system_setting_module_id": 3,
    "sys_var_name": "xe_force_doctor_allergy_screen_before_save",
    "setting_description": "ที่ระบบบันทึกการคัดกรอง หากต้องการบังคับให้มีการบันทึกผลการคัดกรองการแพ้ยา ให้กำหนดที่ตั้งค่าตัวนี้",
    "setting_name": "บังคับให้ลงบันทึกการแพ้ยาก่อนบันทึกรายการ",
    "setting_value_type": "Check",
    "number_min_value": null,
    "number_max_value": null,
    "code_lookup_table": null,
    "code_lookup_key_field": null,
    "code_lookup_list_field": null,
    "lookup_description": null,
    "sys_order_code": "Z",
    "code_integer": null,
    "full_description": "บังคับให้แพทย์ต้องบันทึกข้อมูลการแพ้ยาของผู้ป่วยก่อนบันทึกรายการรักษาในหน้าจอ Doctor Workbench เพิ่มความปลอดภัยในการจ่ายยา | ไฟล์: DoctorWorkBenchEntryFrameUnit.pas, HOSxPDentalWorkbenchEntryFrameUnit.pas, HOSxPDoctorOnstopServiceEntryFormUnit.pas | ผลกระทบ: เปิด Y = บังคับบันทึกการแพ้ยาก่อน ปิด N = ไม่บังคับ | ค่าแนะนำ: Y (เพิ่มความปลอดภัย)"
  },
  {
    "system_setting_list_id": 7,
    "system_setting_module_id": 3,
    "sys_var_name": "doctor_cert_charge",
    "setting_description": "ในระบบออกใบรับรองแพทย์ สามารถกำหนดให้คิดค่าบริการออกใบรับรองแพทย์อัตโนมัติได้ กำหนดได้ที่ตั้งค่าตัวนี้",
    "setting_name": "คิดค่าธรรมเนียมออกใบรับรองแพทย์",
    "setting_value_type": "Check",
    "number_min_value": null,
    "number_max_value": null,
    "code_lookup_table": null,
    "code_lookup_key_field": null,
    "code_lookup_list_field": null,
    "lookup_description": null,
    "sys_order_code": "A1",
    "code_integer": null,
    "full_description": "เปิดการคิดค่าธรรมเนียมออกใบรับรองแพทย์อัตโนมัติ เมื่อเปิดจะเพิ่มรายการค่าบริการออกใบรับรองแพทย์เข้าในรายการค่าใช้จ่ายของผู้ป่วยโดยอัตโนมัติ ใช้ร่วมกับ doctor_cert_charge_icode และ doctor_cert_charge_price | ไฟล์: DoctorWorkBenchPatientCertifiedEntryFormUnit.pas | ผลกระทบ: เปิด Y = คิดค่าธรรมเนียมอัตโนมัติ ปิด N = ไม่คิดค่าธรรมเนียม | ค่าแนะนำ: Y (หากต้องการคิดค่าธรรมเนียม)"
  },
  {
    "system_setting_list_id": 8,
    "system_setting_module_id": 3,
    "sys_var_name": "doctor_cert_charge_icode",
    "setting_description": "รหัสค่าบริการออกใบรับรองแพทย์",
    "setting_name": "รหัสค่าบริการออกใบรับรองแพทย์ (กำหนดใน doctor_cert_type)",
    "setting_value_type": "Code",
    "number_min_value": null,
    "number_max_value": null,
    "code_lookup_table": "nondrugitems",
    "code_lookup_key_field": "icode",
    "code_lookup_list_field": "name",
    "lookup_description": null,
    "sys_order_code": "A2",
    "code_integer": null,
    "full_description": "กำหนดรหัสค่าบริการ (icode) สำหรับค่าธรรมเนียมออกใบรับรองแพทย์ ใช้ร่วมกับ doctor_cert_charge เพื่อเพิ่มรายการค่าบริการอัตโนมัติ สามารถกำหนดรายละเอียดเพิ่มเติมในตาราง doctor_cert_type | ไฟล์: DoctorWorkBenchPatientCertifiedEntryFormUnit.pas | ผลกระทบ: หากไม่กำหนด จะไม่สามารถคิดค่าธรรมเนียมอัตโนมัติได้ | ค่าแนะนำ: รหัส icode ของค่าธรรมเนียมใบรับรองแพทย์"
  }
]
```
