# `fwf_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| fwf_item_id | int(11) | NO | PRI | 0 |  |  |
| fwf_item_name | varchar(200) | YES | UNI | NULL |  |  |
| fwf_active | char(1) | YES |  | NULL |  |  |
| fwf_item_unit_name | varchar(100) | YES |  | NULL |  |  |
| fwf_opd_active | char(1) | YES |  | NULL |  |  |
| fwf_ipd_active | char(1) | YES |  | NULL |  |  |
| fwf_claim_group_id | int(11) | YES |  | NULL |  |  |
| fwf_arv_active | char(1) | YES |  | NULL |  |  |
| fwf_item_code | varchar(10) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_fwf_item_code | fwf_item_code | yes | 1 |
| ix_fwf_item_name | fwf_item_name | yes | 1 |
| PRIMARY | fwf_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "fwf_item_id": 1,
    "fwf_item_name": "ผู้ป่วยในที่มีน้ำหนัก RW >=4 (10,300/adj.rw) (1100)",
    "fwf_active": "Y",
    "fwf_item_unit_name": "rw",
    "fwf_opd_active": "N",
    "fwf_ipd_active": "Y",
    "fwf_claim_group_id": 1,
    "fwf_arv_active": "N",
    "fwf_item_code": "1100"
  },
  {
    "fwf_item_id": 2,
    "fwf_item_name": "การให้เคมีบำบัด(Chemotherapy)และหรือรังสีรักษา(Radiotherapy) ในผู้ป่วยโรคมะเร็ง (10,300/rw) (1210)",
    "fwf_active": "Y",
    "fwf_item_unit_name": "rw",
    "fwf_opd_active": "N",
    "fwf_ipd_active": "Y",
    "fwf_claim_group_id": 3,
    "fwf_arv_active": "N",
    "fwf_item_code": "1210"
  },
  {
    "fwf_item_id": 3,
    "fwf_item_name": "การรักษาผู้ป่วยบาดเจ็บทางสมองด้วยการผ่าตัดสมอง(Head injury with craniotomy) (10,300/rw) (1220)",
    "fwf_active": "Y",
    "fwf_item_unit_name": "rw",
    "fwf_opd_active": "N",
    "fwf_ipd_active": "Y",
    "fwf_claim_group_id": 3,
    "fwf_arv_active": "N",
    "fwf_item_code": "1220"
  },
  {
    "fwf_item_id": 4,
    "fwf_item_name": "การผ่าตัดหัวใจแบบเปิด(Open heart Surgery) (10,300/rw) (1230)",
    "fwf_active": "Y",
    "fwf_item_unit_name": "rw",
    "fwf_opd_active": "N",
    "fwf_ipd_active": "Y",
    "fwf_claim_group_id": 3,
    "fwf_arv_active": "N",
    "fwf_item_code": "1230"
  },
  {
    "fwf_item_id": 5,
    "fwf_item_name": "การผ่าตัดหัวใจในโรคหลอดเลือดหัวใจตีบ(Coronary Bypass) (10,300/rw) (1241)",
    "fwf_active": "Y",
    "fwf_item_unit_name": "rw",
    "fwf_opd_active": "N",
    "fwf_ipd_active": "Y",
    "fwf_claim_group_id": 3,
    "fwf_arv_active": "N",
    "fwf_item_code": "1241"
  },
  {
    "fwf_item_id": 6,
    "fwf_item_name": "การรักษาโรคลิ้นหัวใจโดยใช้บอลลูนผ่านทางผิวหนัง(Percutaneous Balloon Valvuloplasty) (10,300/rw) (1251)",
    "fwf_active": "Y",
    "fwf_item_unit_name": "rw",
    "fwf_opd_active": "N",
    "fwf_ipd_active": "Y",
    "fwf_claim_group_id": 3,
    "fwf_arv_active": "N",
    "fwf_item_code": "1251"
  },
  {
    "fwf_item_id": 7,
    "fwf_item_name": "การรักษาผู้ป่วยที่เจ็บป่วยด้วยการขยายหลอดเลือดหัวใจโดยการใช้บอลลูน(Balloon) /การแก้ไขการอุดตันของหลอดเลือดหัวใจด้วยหัวกรอ (10,300/rw) (1252)",
    "fwf_active": "Y",
    "fwf_item_unit_name": "rw",
    "fwf_opd_active": "N",
    "fwf_ipd_active": "Y",
    "fwf_claim_group_id": 3,
    "fwf_arv_active": "N",
    "fwf_item_code": "1252"
  },
  {
    "fwf_item_id": 8,
    "fwf_item_name": "ค่ายาในการรักษาผู้ป่วยที่เจ็บป่วยด้วยโรคเยื่อหุ้มสมองอักเสบจากเชื้อรา (10,300/rw) (1261)",
    "fwf_active": "Y",
    "fwf_item_unit_name": "rw",
    "fwf_opd_active": "N",
    "fwf_ipd_active": "Y",
    "fwf_claim_group_id": 3,
    "fwf_arv_active": "N",
    "fwf_item_code": "1261"
  }
]
```
