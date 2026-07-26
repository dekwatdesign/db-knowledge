# `pttype_coverage_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pttype_coverage_group_code | char(3) | NO | PRI |  |  |  |
| pttype_coverage_group_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pttype_coverage_group_name | pttype_coverage_group_name | yes | 1 |
| PRIMARY | pttype_coverage_group_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "pttype_coverage_group_code": "DPO",
    "pttype_coverage_group_name": "สิทธิหลักประกันสุขภาพแห่งชาติ (ผู้ประกันตนคนพิการ)/สิทธิครูเอกชน/สิทธิข้าราชการ/สิทธิหน่วยงานรัฐ"
  },
  {
    "pttype_coverage_group_code": "DPL",
    "pttype_coverage_group_name": "สิทธิหลักประกันสุขภาพแห่งชาติ (ผู้ประกันตนคนพิการ)/สิทธิครูเอกชน/สิทธิสวัสดิการพนักงานส่วนท้องถิ่น"
  },
  {
    "pttype_coverage_group_code": "DOL",
    "pttype_coverage_group_name": "สิทธิหลักประกันสุขภาพแห่งชาติ (ผู้ประกันตนคนพิการ)/สิทธิข้าราชการ/สิทธิหน่วยงานรัฐ/สิทธิสวัสดิการพนักงานส่วนท้องถิ่น"
  },
  {
    "pttype_coverage_group_code": "DOF",
    "pttype_coverage_group_name": "สิทธิหลักประกันสุขภาพแห่งชาติ (ผู้ประกันตนคนพิการ)/สิทธิข้าราชการ/สิทธิหน่วยงานรัฐ"
  },
  {
    "pttype_coverage_group_code": "DOB",
    "pttype_coverage_group_name": "สิทธิหลักประกันสุขภาพแห่งชาติ (ผู้ประกันตนคนพิการ)/สิทธิข้าราชการ/สิทธิหน่วยงานรัฐ/สิทธิข้าราชการการเมือง"
  },
  {
    "pttype_coverage_group_code": "DLG",
    "pttype_coverage_group_name": "สิทธิหลักประกันสุขภาพแห่งชาติ (ผู้ประกันตนคนพิการ)/สิทธิสวัสดิการพนักงานส่วนท้องถิ่น"
  },
  {
    "pttype_coverage_group_code": "DLB",
    "pttype_coverage_group_name": "สิทธิหลักประกันสุขภาพแห่งชาติ (ผู้ประกันตนคนพิการ)/สิทธิสวัสดิการพนักงานส่วนท้องถิ่น/สิทธิข้าราชการการเมือง"
  },
  {
    "pttype_coverage_group_code": "DIS",
    "pttype_coverage_group_name": "สิทธิหลักประกันสุขภาพแห่งชาติ (ผู้ประกันตนคนพิการ)"
  }
]
```
