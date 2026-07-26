# `med_recon_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| med_recon_detail_id | int(11) | NO | PRI | 0 |  |  |
| med_recon_id | int(11) | YES |  | NULL |  |  |
| medication_name | varchar(200) | YES |  | NULL |  |  |
| receive_location | varchar(200) | YES |  | NULL |  |  |
| last_receive_date | date | YES |  | NULL |  |  |
| med_recon_command_type_id | int(11) | YES |  | NULL |  |  |
| med_recon_manage_type_id | int(11) | YES |  | NULL |  |  |
| med_recon_change_cause | varchar(200) | YES |  | NULL |  |  |
| usage_name | varchar(200) | YES |  | NULL |  |  |
| print_sticker | char(1) | YES |  | NULL |  |  |
| qty | double(15,3) | YES |  | NULL |  |  |
| carry_qty | double(15,3) | YES |  | NULL |  |  |
| alert_opd | char(1) | YES |  | NULL |  |  |
| alert_ipd | char(1) | YES |  | NULL |  |  |
| alert_start_date | date | YES |  | NULL |  |  |
| alert_finish_date | date | YES |  | NULL |  |  |
| acc_doctor_list | varchar(250) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| update_staff | varchar(25) | YES |  | NULL |  |  |
| tmt_tpu_code | varchar(15) | YES |  | NULL |  |  |
| tmt_gpu_code | varchar(15) | YES |  | NULL |  |  |
| last_meal_type_id | int(11) | YES |  | NULL |  |  |
| med_recon_note | varchar(1000) | YES |  | NULL |  |  |
| local_name | varchar(200) | YES |  | NULL |  |  |
| local_icode | varchar(7) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | med_recon_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "med_recon_detail_id": 1,
    "med_recon_id": 6,
    "medication_name": "Methylphenidate(RITALIN) 10 mg เม็ด",
    "receive_location": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "last_receive_date": "2024-11-15",
    "med_recon_command_type_id": null,
    "med_recon_manage_type_id": null,
    "med_recon_change_cause": null,
    "usage_name": "",
    "print_sticker": "Y",
    "qty": 100.0,
    "carry_qty": null,
    "alert_opd": null,
    "alert_ipd": null,
    "alert_start_date": null,
    "alert_finish_date": null,
    "acc_doctor_list": "[MASKED_FULLNAME]",
    "update_datetime": "2025-01-09 13:56:51",
    "update_staff": "yuwa231",
    "tmt_tpu_code": null,
    "tmt_gpu_code": null,
    "last_meal_type_id": null,
    "med_recon_note": null,
    "local_name": null,
    "local_icode": null
  },
  {
    "med_recon_detail_id": 2,
    "med_recon_id": 6,
    "medication_name": "Perphenazine (สีส้ม)=ส= 2 mg เม็ด",
    "receive_location": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "last_receive_date": "2024-11-15",
    "med_recon_command_type_id": null,
    "med_recon_manage_type_id": null,
    "med_recon_change_cause": null,
    "usage_name": "12pt ช น(1*2,hs เช้า-ก่อนอน)",
    "print_sticker": "Y",
    "qty": 40.0,
    "carry_qty": null,
    "alert_opd": null,
    "alert_ipd": null,
    "alert_start_date": null,
    "alert_finish_date": null,
    "acc_doctor_list": "[MASKED_FULLNAME]",
    "update_datetime": "2025-01-09 13:56:51",
    "update_staff": "yuwa231",
    "tmt_tpu_code": null,
    "tmt_gpu_code": null,
    "last_meal_type_id": null,
    "med_recon_note": null,
    "local_name": null,
    "local_icode": null
  },
  {
    "med_recon_detail_id": 3,
    "med_recon_id": 6,
    "medication_name": "LORazepam(แผงสีเหลือง) 1 mg เม็ด",
    "receive_location": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "last_receive_date": "2024-11-15",
    "med_recon_command_type_id": null,
    "med_recon_manage_type_id": null,
    "med_recon_change_cause": null,
    "usage_name": "11ht (1 เม็ด hs)",
    "print_sticker": "Y",
    "qty": 20.0,
    "carry_qty": null,
    "alert_opd": null,
    "alert_ipd": null,
    "alert_start_date": null,
    "alert_finish_date": null,
    "acc_doctor_list": "[MASKED_FULLNAME]",
    "update_datetime": "2025-01-09 13:56:51",
    "update_staff": "yuwa231",
    "tmt_tpu_code": null,
    "tmt_gpu_code": null,
    "last_meal_type_id": null,
    "med_recon_note": null,
    "local_name": null,
    "local_icode": null
  },
  {
    "med_recon_detail_id": 4,
    "med_recon_id": 6,
    "medication_name": "Nortriptyline  (Ortrip)=ส= 25 mg เม็ด",
    "receive_location": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "last_receive_date": "2024-11-15",
    "med_recon_command_type_id": null,
    "med_recon_manage_type_id": null,
    "med_recon_change_cause": null,
    "usage_name": "21ht (2 เม็ด HS) รับประทาน ครั้งละ 2 เม็ด",
    "print_sticker": "Y",
    "qty": 40.0,
    "carry_qty": null,
    "alert_opd": null,
    "alert_ipd": null,
    "alert_start_date": null,
    "alert_finish_date": null,
    "acc_doctor_list": "[MASKED_FULLNAME]",
    "update_datetime": "2025-01-09 13:56:51",
    "update_staff": "yuwa231",
    "tmt_tpu_code": null,
    "tmt_gpu_code": null,
    "last_meal_type_id": null,
    "med_recon_note": null,
    "local_name": null,
    "local_icode": null
  },
  {
    "med_recon_detail_id": 5,
    "med_recon_id": 7,
    "medication_name": "GPO Risperidone sol. 1 mg./ml. ขวด",
    "receive_location": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "last_receive_date": "2025-05-19",
    "med_recon_command_type_id": null,
    "med_recon_manage_type_id": null,
    "med_recon_change_cause": null,
    "usage_name": "",
    "print_sticker": "Y",
    "qty": 1.0,
    "carry_qty": null,
    "alert_opd": null,
    "alert_ipd": null,
    "alert_start_date": null,
    "alert_finish_date": null,
    "acc_doctor_list": null,
    "update_datetime": "2025-05-19 11:16:47",
    "update_staff": "yuwa277",
    "tmt_tpu_code": null,
    "tmt_gpu_code": null,
    "last_meal_type_id": null,
    "med_recon_note": null,
    "local_name": "GPO Risperidone sol. 1 mg./ml. ขวด",
    "local_icode": "1670047"
  },
  {
    "med_recon_detail_id": 10,
    "med_recon_id": 16,
    "medication_name": "CloNAzepam (Prenarpil) 0.5 mg เม็ด",
    "receive_location": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "last_receive_date": "2025-12-18",
    "med_recon_command_type_id": null,
    "med_recon_manage_type_id": null,
    "med_recon_change_cause": null,
    "usage_name": "",
    "print_sticker": "Y",
    "qty": 0.0,
    "carry_qty": null,
    "alert_opd": null,
    "alert_ipd": null,
    "alert_start_date": null,
    "alert_finish_date": null,
    "acc_doctor_list": null,
    "update_datetime": "2025-12-19 09:04:23",
    "update_staff": "Yuwa206",
    "tmt_tpu_code": null,
    "tmt_gpu_code": null,
    "last_meal_type_id": 1,
    "med_recon_note": null,
    "local_name": "CloNAzepam (Prenarpil) 0.5 mg เม็ด",
    "local_icode": "1000043"
  },
  {
    "med_recon_detail_id": 11,
    "med_recon_id": 16,
    "medication_name": "SERTRA (Sertraline) 50 mg เม็ด",
    "receive_location": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "last_receive_date": "2025-12-18",
    "med_recon_command_type_id": null,
    "med_recon_manage_type_id": null,
    "med_recon_change_cause": null,
    "usage_name": "1.51pt(1เม็ดครึ่ง*1PC) รับประทานครั้งละ 1 เม็ดครึ่",
    "print_sticker": "Y",
    "qty": 0.0,
    "carry_qty": null,
    "alert_opd": null,
    "alert_ipd": null,
    "alert_start_date": null,
    "alert_finish_date": null,
    "acc_doctor_list": null,
    "update_datetime": "2025-12-19 09:04:24",
    "update_staff": "Yuwa206",
    "tmt_tpu_code": null,
    "tmt_gpu_code": null,
    "last_meal_type_id": 2,
    "med_recon_note": null,
    "local_name": "SERTRA (Sertraline) 50 mg เม็ด",
    "local_icode": "1000153"
  },
  {
    "med_recon_detail_id": 12,
    "med_recon_id": 16,
    "medication_name": "Risperidone GPO(สีขาว) 1 mg เม็ด",
    "receive_location": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "last_receive_date": "2025-12-18",
    "med_recon_command_type_id": null,
    "med_recon_manage_type_id": null,
    "med_recon_change_cause": null,
    "usage_name": ".51ht(1/2เม็ดx HS) รับประทานครั้งละ ครึ่ง เม็ด",
    "print_sticker": "Y",
    "qty": 0.0,
    "carry_qty": null,
    "alert_opd": null,
    "alert_ipd": null,
    "alert_start_date": null,
    "alert_finish_date": null,
    "acc_doctor_list": null,
    "update_datetime": "2025-12-19 09:04:31",
    "update_staff": "Yuwa206",
    "tmt_tpu_code": null,
    "tmt_gpu_code": null,
    "last_meal_type_id": 2,
    "med_recon_note": null,
    "local_name": "Risperidone GPO(สีขาว) 1 mg เม็ด",
    "local_icode": "1000143"
  }
]
```
