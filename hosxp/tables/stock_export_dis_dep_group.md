# `stock_export_dis_dep_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_export_dis_dep_group_id | int(11) | NO | PRI | 0 |  |  |
| dis_dep_group | int(11) | YES |  | NULL |  |  |
| consump_group | varchar(100) | YES |  | NULL |  |  |
| consump_group_desc | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | stock_export_dis_dep_group_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "stock_export_dis_dep_group_id": 1,
    "dis_dep_group": 1,
    "consump_group": "OPD+IPD consumption",
    "consump_group_desc": "หน่วยเบิกที่บริการทั้งผู้ป่วยนอกและผู้ป่วยในสัดส่วนใกล้เคียงกัน"
  },
  {
    "stock_export_dis_dep_group_id": 2,
    "dis_dep_group": 2,
    "consump_group": "OPD consumption",
    "consump_group_desc": "หน่วยเบิกที่บริการผู้ป่วยนอกเป็นหลัก (มากกว่า 70%)"
  },
  {
    "stock_export_dis_dep_group_id": 3,
    "dis_dep_group": 3,
    "consump_group": "IPD consumption",
    "consump_group_desc": "หน่วยเบิกที่บริการผู้ป่วยในเป็นหลัก (มากกว่า 70%)"
  },
  {
    "stock_export_dis_dep_group_id": 4,
    "dis_dep_group": 4,
    "consump_group": "อื่นๆ ในโรงพยาบาล",
    "consump_group_desc": "หน่วยเบิกอื่นๆ ในโรงพยาบาล เช่น ห้องผ่าตัด ห้อง x-ray "
  },
  {
    "stock_export_dis_dep_group_id": 5,
    "dis_dep_group": 5,
    "consump_group": "รพ.สต.",
    "consump_group_desc": "รพ.สต. ภายในเครือข่ายบริการเดียวกัน"
  },
  {
    "stock_export_dis_dep_group_id": 6,
    "dis_dep_group": 6,
    "consump_group": "รพ.สต.ที่ถ่ายโอน",
    "consump_group_desc": "รพ.สต. ที่ถ่ายโอนไปหน่วยงานปกครองส่วนท้องถิ่น"
  },
  {
    "stock_export_dis_dep_group_id": 9,
    "dis_dep_group": 9,
    "consump_group": "อื่นๆ นอกโรงพยาบาล",
    "consump_group_desc": "หน่วยเบิกอื่นๆ ที่ไม่ใช่ CUP ของโรงพยาบาล เช่น รพ.อื่นๆ "
  }
]
```
