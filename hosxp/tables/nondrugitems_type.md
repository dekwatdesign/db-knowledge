# `nondrugitems_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nondrugitems_type_id | int(11) | NO | PRI | 0 |  |  |
| nondrugitems_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_nondrugitems_type_name | nondrugitems_type_name | yes | 1 |
| PRIMARY | nondrugitems_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "nondrugitems_type_id": 31,
    "nondrugitems_type_name": "สค : ประเภทการประเมินตรวจวินิจฉัย"
  },
  {
    "nondrugitems_type_id": 32,
    "nondrugitems_type_name": "สค : ประเภทการใหคำปรึกษาสังคมสงเคราะห์ทางการแพทย์"
  },
  {
    "nondrugitems_type_id": 33,
    "nondrugitems_type_name": "สค : ประเภทการบำบัดรักษา"
  },
  {
    "nondrugitems_type_id": 34,
    "nondrugitems_type_name": "สค : ประเภทการฟื้นฟูทางการแพทย์และสังคม"
  },
  {
    "nondrugitems_type_id": 35,
    "nondrugitems_type_name": "สค : ประเภทการดูแลส่งเสริมฟื้นฟู"
  },
  {
    "nondrugitems_type_id": 36,
    "nondrugitems_type_name": "สค : ประเภทติดตามผลด้านการแพทย์และสังคม"
  }
]
```
