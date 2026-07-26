# `patient_adr`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_adr_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| has_adr_history | char(1) | YES |  | NULL |  |  |
| other_dx | varchar(7) | YES |  | NULL |  |  |
| adr_product_type_id | int(11) | YES |  | NULL |  |  |
| adverse_effect | longtext | YES |  | NULL |  |  |
| adverse_effect_date | date | YES |  | NULL |  |  |
| lab_pe_text | longtext | YES |  | NULL |  |  |
| adr_seriousness_id | int(11) | YES |  | NULL |  |  |
| adr_dechallange | char(1) | YES |  | NULL |  |  |
| adr_rechallenge | char(1) | YES |  | NULL |  |  |
| adr_rechallenge_type_id | int(11) | YES |  | NULL |  |  |
| adr_dechallenge_type_id | int(11) | YES |  | NULL |  |  |
| adr_continue_rechallenge | char(1) | YES |  | NULL |  |  |
| adr_continue_rechallenge_id | int(11) | YES |  | NULL |  |  |
| adr_norechallenge | char(1) | YES |  | NULL |  |  |
| adr_outcome_id | int(11) | YES |  | NULL |  |  |
| dx_doctor_name | varchar(150) | YES |  | NULL |  |  |
| dx_doctor_position | varchar(150) | YES |  | NULL |  |  |
| entry_officer_name | varchar(150) | YES |  | NULL |  |  |
| entry_officer_position | varchar(150) | YES |  | NULL |  |  |
| report_date | date | YES | MUL | NULL |  |  |
| adr_cause_id | int(11) | YES |  | NULL |  |  |
| adr_possibility_id | int(11) | YES |  | NULL |  |  |
| adr_report_type_id | int(11) | YES |  | NULL |  |  |
| medication_list | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_report_date | report_date | no | 1 |
| PRIMARY | patient_adr_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "patient_adr_id": 4,
    "hn": "530092654",
    "department": "IPD",
    "an": null,
    "has_adr_history": null,
    "other_dx": null,
    "adr_product_type_id": 1,
    "adverse_effect": "ผื่นแดงบริเวณข้อมือซ้าย ผื่นจะแดงขึ้นเวลาให้ยามื้อถัดไป",
    "adverse_effect_date": "2012-02-28",
    "lab_pe_text": null,
    "adr_seriousness_id": 1,
    "adr_dechallange": "Y",
    "adr_rechallenge": "Y",
    "adr_rechallenge_type_id": null,
    "adr_dechallenge_type_id": 1,
    "adr_continue_rechallenge": null,
    "adr_continue_rechallenge_id": null,
    "adr_norechallenge": null,
    "adr_outcome_id": 1,
    "dx_doctor_name": "[MASKED_FULLNAME]",
    "dx_doctor_position": "จิตแพทย์เด็กและวัยรุ่น",
    "entry_officer_name": "[MASKED_FULLNAME]",
    "entry_officer_position": "เภสัชกรชำนาญการพิเศษ",
    "report_date": "2012-02-08",
    "adr_cause_id": 1,
    "adr_possibility_id": 2,
    "adr_report_type_id": 1,
    "medication_list": "",
    "hos_guid": null
  },
  {
    "patient_adr_id": 8,
    "hn": "530092654",
    "department": "IPD",
    "an": null,
    "has_adr_history": null,
    "other_dx": null,
    "adr_product_type_id": 1,
    "adverse_effect": "congestion มีอาการคัดจมูกหลังกินยาประมาณ  ครึ่ง-1 ชั่วโมง",
    "adverse_effect_date": "2011-11-27",
    "lab_pe_text": null,
    "adr_seriousness_id": 1,
    "adr_dechallange": "Y",
    "adr_rechallenge": "Y",
    "adr_rechallenge_type_id": null,
    "adr_dechallenge_type_id": 1,
    "adr_continue_rechallenge": null,
    "adr_continue_rechallenge_id": null,
    "adr_norechallenge": null,
    "adr_outcome_id": 1,
    "dx_doctor_name": "[MASKED_FULLNAME]",
    "dx_doctor_position": "จิตแพทย์เด็กและวัยรุ่น",
    "entry_officer_name": "[MASKED_FULLNAME]",
    "entry_officer_position": "เภสัชกรชำนาญการพิเศษ",
    "report_date": "2012-02-08",
    "adr_cause_id": 1,
    "adr_possibility_id": 1,
    "adr_report_type_id": 1,
    "medication_list": "",
    "hos_guid": null
  },
  {
    "patient_adr_id": 10,
    "hn": "530066253",
    "department": "OPD",
    "an": null,
    "has_adr_history": null,
    "other_dx": null,
    "adr_product_type_id": 1,
    "adverse_effect": "หลังกินยาประมาณ ครึ่งชั่วโมง (กินยาประมาณ 8:00 น) เด็กมีอาการหงุดหงิดร้องไห้ง่ายผิดปกติ  อารมณ์ไม่ดี = irritable mood โดยอาการดีขึ้นประมาณ 18.00 น.",
    "adverse_effect_date": "2013-05-30",
    "lab_pe_text": null,
    "adr_seriousness_id": 1,
    "adr_dechallange": null,
    "adr_rechallenge": "Y",
    "adr_rechallenge_type_id": null,
    "adr_dechallenge_type_id": null,
    "adr_continue_rechallenge": null,
    "adr_continue_rechallenge_id": null,
    "adr_norechallenge": null,
    "adr_outcome_id": 2,
    "dx_doctor_name": "[MASKED_FULLNAME]",
    "dx_doctor_position": "เภสัชกร",
    "entry_officer_name": "[MASKED_FULLNAME]",
    "entry_officer_position": "จพง.เภสัชกรชำนาญงาน",
    "report_date": "2013-05-31",
    "adr_cause_id": 1,
    "adr_possibility_id": 1,
    "adr_report_type_id": 1,
    "medication_list": "Methylphenidate 10 mg (Ritalin),Risperidone Solution,Depakine Solution 200 mg/ml",
    "hos_guid": null
  },
  {
    "patient_adr_id": 11,
    "hn": "530064053",
    "department": "OPD",
    "an": null,
    "has_adr_history": null,
    "other_dx": null,
    "adr_product_type_id": 1,
    "adverse_effect": "อาการ tics ลักษณะสูดหายใจเหมือนคัดจมูกไม่สบาย โดยไม่ได้มีน้ำมูกหรือไม่สบาย",
    "adverse_effect_date": null,
    "lab_pe_text": null,
    "adr_seriousness_id": null,
    "adr_dechallange": null,
    "adr_rechallenge": null,
    "adr_rechallenge_type_id": null,
    "adr_dechallenge_type_id": null,
    "adr_continue_rechallenge": "Y",
    "adr_continue_rechallenge_id": 2,
    "adr_norechallenge": null,
    "adr_outcome_id": null,
    "dx_doctor_name": "[MASKED_FULLNAME]",
    "dx_doctor_position": "[MASKED_FULLNAME]",
    "entry_officer_name": "[MASKED_FULLNAME]",
    "entry_officer_position": "เภสัชกรชำนาญการพิเศษ",
    "report_date": "2013-07-25",
    "adr_cause_id": 1,
    "adr_possibility_id": 1,
    "adr_report_type_id": 1,
    "medication_list": "",
    "hos_guid": null
  },
  {
    "patient_adr_id": 13,
    "hn": "530064053",
    "department": "OPD",
    "an": null,
    "has_adr_history": null,
    "other_dx": null,
    "adr_product_type_id": 1,
    "adverse_effect": "อาการ tics ลักษณะสูดหายใจเหมือนคนคัดจมูก โดยไม่ได้ป่วยหรือมีน้ำมูก ตอนกลางคืนไม่มีอาการ",
    "adverse_effect_date": "2013-02-19",
    "lab_pe_text": null,
    "adr_seriousness_id": 1,
    "adr_dechallange": null,
    "adr_rechallenge": null,
    "adr_rechallenge_type_id": null,
    "adr_dechallenge_type_id": null,
    "adr_continue_rechallenge": "Y",
    "adr_continue_rechallenge_id": 2,
    "adr_norechallenge": null,
    "adr_outcome_id": 3,
    "dx_doctor_name": "[MASKED_FULLNAME]",
    "dx_doctor_position": "[MASKED_FULLNAME]",
    "entry_officer_name": "[MASKED_FULLNAME]",
    "entry_officer_position": "เภสัชกรชำนาญการพิเศษ",
    "report_date": "2013-07-25",
    "adr_cause_id": 1,
    "adr_possibility_id": 1,
    "adr_report_type_id": 1,
    "medication_list": "",
    "hos_guid": null
  },
  {
    "patient_adr_id": 14,
    "hn": "550000633",
    "department": "OPD",
    "an": null,
    "has_adr_history": null,
    "other_dx": null,
    "adr_product_type_id": 1,
    "adverse_effect": "mood labile อารมณ์หงุดหงิดง่าย โวยวาย ร้องไห้",
    "adverse_effect_date": "2013-07-11",
    "lab_pe_text": null,
    "adr_seriousness_id": 1,
    "adr_dechallange": "Y",
    "adr_rechallenge": null,
    "adr_rechallenge_type_id": null,
    "adr_dechallenge_type_id": 1,
    "adr_continue_rechallenge": null,
    "adr_continue_rechallenge_id": null,
    "adr_norechallenge": null,
    "adr_outcome_id": 2,
    "dx_doctor_name": "[MASKED_FULLNAME]",
    "dx_doctor_position": "[MASKED_FULLNAME]",
    "entry_officer_name": "[MASKED_FULLNAME]",
    "entry_officer_position": "เภสัชกรชำนาญการพิเศษ",
    "report_date": "2013-09-11",
    "adr_cause_id": 1,
    "adr_possibility_id": 1,
    "adr_report_type_id": 1,
    "medication_list": "Methylphenidate 10 mg (RITALIN),Risperidone Solution",
    "hos_guid": null
  },
  {
    "patient_adr_id": 27,
    "hn": "560001781",
    "department": "IPD",
    "an": null,
    "has_adr_history": null,
    "other_dx": null,
    "adr_product_type_id": 1,
    "adverse_effect": "ผู้ป่วยมีดึงแก้มตนเอง ดึงตีหน้าอก หลังใช้ยา 7 วัน จากนั้นมีดึงผม ร้องไห้ ไม่ยอมนอนทานข้าวได้น้อยลง (5 คำ) จากเดิมทานเก่งมาก สงสัย agitation , EPS",
    "adverse_effect_date": "2014-03-17",
    "lab_pe_text": null,
    "adr_seriousness_id": 1,
    "adr_dechallange": "Y",
    "adr_rechallenge": null,
    "adr_rechallenge_type_id": null,
    "adr_dechallenge_type_id": null,
    "adr_continue_rechallenge": null,
    "adr_continue_rechallenge_id": null,
    "adr_norechallenge": null,
    "adr_outcome_id": 1,
    "dx_doctor_name": "[MASKED_FULLNAME]",
    "dx_doctor_position": "เภสัชกร",
    "entry_officer_name": "[MASKED_FULLNAME]",
    "entry_officer_position": "เภสัชกรปฏิบัติการ",
    "report_date": "2014-03-19",
    "adr_cause_id": 1,
    "adr_possibility_id": 2,
    "adr_report_type_id": 1,
    "medication_list": "risperdal solution",
    "hos_guid": null
  },
  {
    "patient_adr_id": 30,
    "hn": "530062554",
    "department": "OPD",
    "an": null,
    "has_adr_history": null,
    "other_dx": null,
    "adr_product_type_id": 1,
    "adverse_effect": "rebound effect : mood change, labile mood",
    "adverse_effect_date": "2014-04-04",
    "lab_pe_text": null,
    "adr_seriousness_id": 1,
    "adr_dechallange": "Y",
    "adr_rechallenge": "Y",
    "adr_rechallenge_type_id": null,
    "adr_dechallenge_type_id": 1,
    "adr_continue_rechallenge": null,
    "adr_continue_rechallenge_id": null,
    "adr_norechallenge": null,
    "adr_outcome_id": 1,
    "dx_doctor_name": "[MASKED_FULLNAME]",
    "dx_doctor_position": "[MASKED_FULLNAME]",
    "entry_officer_name": "[MASKED_FULLNAME]",
    "entry_officer_position": "เภสัชกรปฏิบัติการ",
    "report_date": "2014-04-04",
    "adr_cause_id": 1,
    "adr_possibility_id": 2,
    "adr_report_type_id": 1,
    "medication_list": "",
    "hos_guid": null
  }
]
```
