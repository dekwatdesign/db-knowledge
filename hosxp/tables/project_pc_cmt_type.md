# `project_pc_cmt_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| project_pc_cmt_type_id | int(11) | NO | PRI | 0 |  |  |
| project_pc_cmt_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_project_pc_cmt_type_name | project_pc_cmt_type_name | yes | 1 |
| PRIMARY | project_pc_cmt_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "project_pc_cmt_type_id": 1,
    "project_pc_cmt_type_name": "เจ้าหน้าที่ดำเนินการ"
  },
  {
    "project_pc_cmt_type_id": 2,
    "project_pc_cmt_type_name": "กรรมการร่างคุณสมบัติ"
  },
  {
    "project_pc_cmt_type_id": 3,
    "project_pc_cmt_type_name": "กรรมการสอบราคา"
  },
  {
    "project_pc_cmt_type_id": 4,
    "project_pc_cmt_type_name": "กรรมการเปิดซอง"
  },
  {
    "project_pc_cmt_type_id": 5,
    "project_pc_cmt_type_name": "กรรมการตรวจรับ"
  }
]
```
