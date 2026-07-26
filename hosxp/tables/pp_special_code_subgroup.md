# `pp_special_code_subgroup`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pp_special_code_subgroup | char(2) | NO | PRI |  |  |  |
| pp_special_code_subgroup_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pp_special_code_subgroup_name | pp_special_code_subgroup_name | yes | 1 |
| PRIMARY | pp_special_code_subgroup | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "pp_special_code_subgroup": "1A",
    "pp_special_code_subgroup_name": "กิจกรรมเยี่ยมบ้าน"
  },
  {
    "pp_special_code_subgroup": "1B",
    "pp_special_code_subgroup_name": "การตรวจคัดกรองความเสี่ยง/โรค"
  },
  {
    "pp_special_code_subgroup": "1C",
    "pp_special_code_subgroup_name": "การปรับเปลี่ยนพฤติกรรม"
  },
  {
    "pp_special_code_subgroup": "1D",
    "pp_special_code_subgroup_name": "ทันตสาธารณสุข"
  },
  {
    "pp_special_code_subgroup": "1E",
    "pp_special_code_subgroup_name": "โภชนาการ"
  },
  {
    "pp_special_code_subgroup": "1F",
    "pp_special_code_subgroup_name": "การให้คำปรึกษาในชุมชน"
  },
  {
    "pp_special_code_subgroup": "1G",
    "pp_special_code_subgroup_name": "การให้บริการผู้ป่วยในชุมชน"
  },
  {
    "pp_special_code_subgroup": "1H",
    "pp_special_code_subgroup_name": "อนามัยโรงเรียน"
  }
]
```
