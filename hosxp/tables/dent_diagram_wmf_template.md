# `dent_diagram_wmf_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dent_diagram_wmf_template_id | int(11) | NO | PRI | 0 |  |  |
| dent_diagram_wmf_template_name | varchar(200) | YES | UNI | NULL |  |  |
| dent_diagram_wmf_template_blob | longblob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dent_diagram_wmf_template_name | dent_diagram_wmf_template_name | yes | 1 |
| PRIMARY | dent_diagram_wmf_template_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dent_diagram_wmf_template_id": 1,
    "dent_diagram_wmf_template_name": "น็อต 1",
    "dent_diagram_wmf_template_blob": "[MASKED_AVATAR]"
  },
  {
    "dent_diagram_wmf_template_id": 2,
    "dent_diagram_wmf_template_name": "น็อต 2",
    "dent_diagram_wmf_template_blob": "[MASKED_AVATAR]"
  },
  {
    "dent_diagram_wmf_template_id": 3,
    "dent_diagram_wmf_template_name": "ลูกศรโค้ง",
    "dent_diagram_wmf_template_blob": "[MASKED_AVATAR]"
  },
  {
    "dent_diagram_wmf_template_id": 4,
    "dent_diagram_wmf_template_name": "หยึกหยัก",
    "dent_diagram_wmf_template_blob": "[MASKED_AVATAR]"
  },
  {
    "dent_diagram_wmf_template_id": 8,
    "dent_diagram_wmf_template_name": "ครึ่งวงกลม",
    "dent_diagram_wmf_template_blob": "[MASKED_AVATAR]"
  },
  {
    "dent_diagram_wmf_template_id": 6,
    "dent_diagram_wmf_template_name": "เส้นคู่",
    "dent_diagram_wmf_template_blob": "[MASKED_AVATAR]"
  },
  {
    "dent_diagram_wmf_template_id": 7,
    "dent_diagram_wmf_template_name": "เส้นตรง",
    "dent_diagram_wmf_template_blob": "[MASKED_AVATAR]"
  },
  {
    "dent_diagram_wmf_template_id": 9,
    "dent_diagram_wmf_template_name": "ดอกจันทร์",
    "dent_diagram_wmf_template_blob": "[MASKED_AVATAR]"
  }
]
```
