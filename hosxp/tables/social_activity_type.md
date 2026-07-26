# `social_activity_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| social_activity_type_id | int(11) | NO | PRI | 0 |  |  |
| social_activity_type_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | social_activity_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "social_activity_type_id": 1,
    "social_activity_type_name": "1 การประเมินและตรวจวินิจฉัย"
  },
  {
    "social_activity_type_id": 2,
    "social_activity_type_name": "2 การใหคำปรึกษาสังคมสงเคราะห์ทางการแพทย์"
  },
  {
    "social_activity_type_id": 3,
    "social_activity_type_name": "3 การบำบัดรักษา"
  },
  {
    "social_activity_type_id": 4,
    "social_activity_type_name": "4 การฟื้นฟูทางการแพทย์และสังคม"
  },
  {
    "social_activity_type_id": 5,
    "social_activity_type_name": "5 การดูแลส่งเสริมฟื้นฟู"
  },
  {
    "social_activity_type_id": 6,
    "social_activity_type_name": "6 ติดตามผลด้านการแพทย์และสังคม"
  }
]
```
