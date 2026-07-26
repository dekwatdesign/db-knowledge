# `drug_interaction`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drug_interaction_id | int(11) | NO | PRI | 0 |  |  |
| drugname1 | varchar(250) | YES | MUL | NULL |  |  |
| drugname2 | varchar(250) | YES | MUL | NULL |  |  |
| drug_interaction_type | int(11) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| severity | int(11) | YES |  | NULL |  |  |
| show_doctor | char(1) | YES |  | NULL |  |  |
| print_sticker | char(1) | YES |  | NULL |  |  |
| not_allow | char(1) | YES |  | NULL |  |  |
| check_old_prescription | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| check_old_interval | int(11) | YES |  | NULL |  |  |
| tmt_substance_code1 | varchar(6) | YES |  | NULL |  |  |
| tmt_substance_code2 | varchar(6) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| drugname1 | drugname1 | no | 1 |
| drugname12 | drugname1 | no | 1 |
| drugname12 | drugname2 | no | 2 |
| drugname2 | drugname2 | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | drug_interaction_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "drug_interaction_id": 1,
    "drugname1": "WARFARIN(สีฟ้า)",
    "drugname2": "PHENOBARBITAL",
    "drug_interaction_type": 1,
    "note": "barbiturates  ลดผลของ anticoagulants ในทางกลับกัน  ถ้าหยุด barbiturates  จะทำให้การออกฤทธิ์ของ anticoagulant มากเกินปกติและทำให้เลือดออกได้",
    "severity": 1,
    "show_doctor": "Y",
    "print_sticker": "Y",
    "not_allow": null,
    "check_old_prescription": null,
    "hos_guid": null,
    "check_old_interval": null,
    "tmt_substance_code1": null,
    "tmt_substance_code2": null
  },
  {
    "drug_interaction_id": 2,
    "drugname1": "FERROUS FUMARATE",
    "drugname2": "CIMETIDINE",
    "drug_interaction_type": 1,
    "note": null,
    "severity": 2,
    "show_doctor": "Y",
    "print_sticker": "Y",
    "not_allow": null,
    "check_old_prescription": null,
    "hos_guid": null,
    "check_old_interval": null,
    "tmt_substance_code1": null,
    "tmt_substance_code2": null
  },
  {
    "drug_interaction_id": 4,
    "drugname1": "WARFARIN(สีชมพู)",
    "drugname2": "PHENOBARBITAL",
    "drug_interaction_type": 1,
    "note": "barbiturates  ลดผลของ anticoagulants ในทางกลับกัน  ถ้าหยุด barbiturates  จะทำให้การออกฤทธิ์ของ anticoagulant มากเกินปกติและทำให้เลือดออกได้",
    "severity": 1,
    "show_doctor": "Y",
    "print_sticker": "Y",
    "not_allow": null,
    "check_old_prescription": null,
    "hos_guid": null,
    "check_old_interval": null,
    "tmt_substance_code1": null,
    "tmt_substance_code2": null
  },
  {
    "drug_interaction_id": 5,
    "drugname1": "DIGOXIN",
    "drugname2": "FUROSEMIDE",
    "drug_interaction_type": 1,
    "note": "เพิ่มการขับออกของโพแทสเซียมและแมกนีเซียม มีผลค่อการทำงานของกล้ามเนื้อหัวใจ",
    "severity": 1,
    "show_doctor": "Y",
    "print_sticker": "Y",
    "not_allow": null,
    "check_old_prescription": null,
    "hos_guid": null,
    "check_old_interval": null,
    "tmt_substance_code1": null,
    "tmt_substance_code2": null
  },
  {
    "drug_interaction_id": 6,
    "drugname1": "WARFARIN(สีชมพู)",
    "drugname2": "METRONIDAZOLE",
    "drug_interaction_type": 1,
    "note": "metronidazole ไปยับยั้ง hepatic metabolism ของ warfarin ผลของ warfarin อาจเพิ่มขี้น เกิด bleeding ได้",
    "severity": 1,
    "show_doctor": "Y",
    "print_sticker": "Y",
    "not_allow": null,
    "check_old_prescription": null,
    "hos_guid": null,
    "check_old_interval": null,
    "tmt_substance_code1": null,
    "tmt_substance_code2": null
  },
  {
    "drug_interaction_id": 7,
    "drugname1": "WARFARIN(สีฟ้า)",
    "drugname2": "METRONIDAZOLE",
    "drug_interaction_type": 1,
    "note": "metronidazole ไปยับยั้ง hepatic metabolism ของ warfarin  ผลของ  warfarin  อาจเพิ่มขึ้น  เกิด bleeding  ได้",
    "severity": 1,
    "show_doctor": "Y",
    "print_sticker": "Y",
    "not_allow": null,
    "check_old_prescription": null,
    "hos_guid": null,
    "check_old_interval": null,
    "tmt_substance_code1": null,
    "tmt_substance_code2": null
  },
  {
    "drug_interaction_id": 8,
    "drugname1": "DIGOXIN",
    "drugname2": "VERAPAMIL",
    "drug_interaction_type": 1,
    "note": "ระดับยา digoxin ใน serum เพิ่มขึ้น  กดการทำงานของ cardiac conduction ได้",
    "severity": 2,
    "show_doctor": "Y",
    "print_sticker": "Y",
    "not_allow": null,
    "check_old_prescription": null,
    "hos_guid": null,
    "check_old_interval": null,
    "tmt_substance_code1": null,
    "tmt_substance_code2": null
  },
  {
    "drug_interaction_id": 9,
    "drugname1": "DIGOXIN SYRUP",
    "drugname2": "VERAPAMIL",
    "drug_interaction_type": 1,
    "note": "ระดับยา digoxin ใน serum อาจเพิ่มขึ้น  กดการทำงานของ cardiac  conduction ได้",
    "severity": 2,
    "show_doctor": "Y",
    "print_sticker": "Y",
    "not_allow": null,
    "check_old_prescription": null,
    "hos_guid": null,
    "check_old_interval": null,
    "tmt_substance_code1": null,
    "tmt_substance_code2": null
  }
]
```
