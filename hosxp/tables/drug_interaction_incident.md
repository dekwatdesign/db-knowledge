# `drug_interaction_incident`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| drugname1 | varchar(100) | NO | PRI |  |  |  |
| drugname2 | varchar(100) | NO | PRI |  |  |  |
| doctor | varchar(10) | YES |  | NULL |  |  |
| note | varchar(250) | YES |  | NULL |  |  |
| print_sticker | char(1) | YES |  | NULL |  |  |
| order_no | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES | MUL | NULL |  |  |
| drug_interaction_id | int(11) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| incident_date | date | YES |  | NULL |  |  |
| incident_time | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_vn_opi_guid | vn | no | 1 |
| ix_vn_opi_guid | opi_guid | no | 2 |
| ix_vn_opi_guid_index | opi_guid | no | 1 |
| ix_vn_opi_guid_index | vn | no | 2 |
| PRIMARY | vn | yes | 1 |
| PRIMARY | drugname1 | yes | 2 |
| PRIMARY | drugname2 | yes | 3 |
| vn_unique | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "550326093019",
    "drugname1": "LITHIUMCARBONATE",
    "drugname2": "HALOPERIDOL",
    "doctor": "",
    "note": "ผลของการใช้ยาร่วมกัน : อาการอ่อนเพลีย เซื่องซึม สั่น สับสน มึนคงไม่รู้สึกตัว มีไข้ EPS รุนแรง เม็ดเลือดขาวสูง Serum enzyme และ BUN สูง ค่า EEG เปลี่ยนแปลง\r\nการดูแลผู้ป่วย: ควรติดตามผู้ป่วยอย่างใกล้ชิด เฝ้าระวังโดยเฉพาะในช่วง 3 สัปดาห์แรกของการรักษา ถ",
    "print_sticker": "",
    "order_no": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "department": null,
    "opi_guid": null,
    "drug_interaction_id": null,
    "icode": null,
    "incident_date": null,
    "incident_time": null
  },
  {
    "vn": "550330140139",
    "drugname1": "LITHIUMCARBONATE",
    "drugname2": "HALOPERIDOL",
    "doctor": "",
    "note": "ผลของการใช้ยาร่วมกัน : อาการอ่อนเพลีย เซื่องซึม สั่น สับสน มึนคงไม่รู้สึกตัว มีไข้ EPS รุนแรง เม็ดเลือดขาวสูง Serum enzyme และ BUN สูง ค่า EEG เปลี่ยนแปลง\r\nการดูแลผู้ป่วย: ควรติดตามผู้ป่วยอย่างใกล้ชิด เฝ้าระวังโดยเฉพาะในช่วง 3 สัปดาห์แรกของการรักษา ถ",
    "print_sticker": "",
    "order_no": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "department": null,
    "opi_guid": null,
    "drug_interaction_id": null,
    "icode": null,
    "incident_date": null,
    "incident_time": null
  },
  {
    "vn": "550402143532",
    "drugname1": "LITHIUMCARBONATE",
    "drugname2": "HALOPERIDOL",
    "doctor": "",
    "note": "ผลของการใช้ยาร่วมกัน : อาการอ่อนเพลีย เซื่องซึม สั่น สับสน มึนคงไม่รู้สึกตัว มีไข้ EPS รุนแรง เม็ดเลือดขาวสูง Serum enzyme และ BUN สูง ค่า EEG เปลี่ยนแปลง\r\nการดูแลผู้ป่วย: ควรติดตามผู้ป่วยอย่างใกล้ชิด เฝ้าระวังโดยเฉพาะในช่วง 3 สัปดาห์แรกของการรักษา ถ",
    "print_sticker": "",
    "order_no": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "department": null,
    "opi_guid": null,
    "drug_interaction_id": null,
    "icode": null,
    "incident_date": null,
    "incident_time": null
  },
  {
    "vn": "550418130012",
    "drugname1": "LITHIUMCARBONATE",
    "drugname2": "HALOPERIDOL",
    "doctor": "",
    "note": "ผลของการใช้ยาร่วมกัน : อาการอ่อนเพลีย เซื่องซึม สั่น สับสน มึนคงไม่รู้สึกตัว มีไข้ EPS รุนแรง เม็ดเลือดขาวสูง Serum enzyme และ BUN สูง ค่า EEG เปลี่ยนแปลง\r\nการดูแลผู้ป่วย: ควรติดตามผู้ป่วยอย่างใกล้ชิด เฝ้าระวังโดยเฉพาะในช่วง 3 สัปดาห์แรกของการรักษา ถ",
    "print_sticker": "",
    "order_no": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "department": null,
    "opi_guid": null,
    "drug_interaction_id": null,
    "icode": null,
    "incident_date": null,
    "incident_time": null
  },
  {
    "vn": "550420083006",
    "drugname1": "LITHIUMCARBONATE",
    "drugname2": "HALOPERIDOL",
    "doctor": "",
    "note": "ผลของการใช้ยาร่วมกัน : อาการอ่อนเพลีย เซื่องซึม สั่น สับสน มึนคงไม่รู้สึกตัว มีไข้ EPS รุนแรง เม็ดเลือดขาวสูง Serum enzyme และ BUN สูง ค่า EEG เปลี่ยนแปลง\r\nการดูแลผู้ป่วย: ควรติดตามผู้ป่วยอย่างใกล้ชิด เฝ้าระวังโดยเฉพาะในช่วง 3 สัปดาห์แรกของการรักษา ถ",
    "print_sticker": "",
    "order_no": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "department": null,
    "opi_guid": null,
    "drug_interaction_id": null,
    "icode": null,
    "incident_date": null,
    "incident_time": null
  },
  {
    "vn": "550424080941",
    "drugname1": "LITHIUMCARBONATE",
    "drugname2": "HALOPERIDOL",
    "doctor": "",
    "note": "ผลของการใช้ยาร่วมกัน : อาการอ่อนเพลีย เซื่องซึม สั่น สับสน มึนคงไม่รู้สึกตัว มีไข้ EPS รุนแรง เม็ดเลือดขาวสูง Serum enzyme และ BUN สูง ค่า EEG เปลี่ยนแปลง\r\nการดูแลผู้ป่วย: ควรติดตามผู้ป่วยอย่างใกล้ชิด เฝ้าระวังโดยเฉพาะในช่วง 3 สัปดาห์แรกของการรักษา ถ",
    "print_sticker": "",
    "order_no": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "department": null,
    "opi_guid": null,
    "drug_interaction_id": null,
    "icode": null,
    "incident_date": null,
    "incident_time": null
  },
  {
    "vn": "550510100550",
    "drugname1": "LITHIUMCARBONATE",
    "drugname2": "HALOPERIDOL",
    "doctor": "",
    "note": "ผลของการใช้ยาร่วมกัน : อาการอ่อนเพลีย เซื่องซึม สั่น สับสน มึนคงไม่รู้สึกตัว มีไข้ EPS รุนแรง เม็ดเลือดขาวสูง Serum enzyme และ BUN สูง ค่า EEG เปลี่ยนแปลง\r\nการดูแลผู้ป่วย: ควรติดตามผู้ป่วยอย่างใกล้ชิด เฝ้าระวังโดยเฉพาะในช่วง 3 สัปดาห์แรกของการรักษา ถ",
    "print_sticker": "",
    "order_no": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "department": null,
    "opi_guid": null,
    "drug_interaction_id": null,
    "icode": null,
    "incident_date": null,
    "incident_time": null
  },
  {
    "vn": "550516182914",
    "drugname1": "LITHIUMCARBONATE",
    "drugname2": "HALOPERIDOL",
    "doctor": "",
    "note": "ผลของการใช้ยาร่วมกัน : อาการอ่อนเพลีย เซื่องซึม สั่น สับสน มึนคงไม่รู้สึกตัว มีไข้ EPS รุนแรง เม็ดเลือดขาวสูง Serum enzyme และ BUN สูง ค่า EEG เปลี่ยนแปลง\r\nการดูแลผู้ป่วย: ควรติดตามผู้ป่วยอย่างใกล้ชิด เฝ้าระวังโดยเฉพาะในช่วง 3 สัปดาห์แรกของการรักษา ถ",
    "print_sticker": "",
    "order_no": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "department": null,
    "opi_guid": null,
    "drug_interaction_id": null,
    "icode": null,
    "incident_date": null,
    "incident_time": null
  }
]
```
