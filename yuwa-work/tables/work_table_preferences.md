# `work_table_preferences`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| pref_key | varchar(100) | NO | UNI | NULL |  | unique key ของหน้า เช่น hr_official_travel |
| pref_value | text | YES |  | NULL |  | JSON string ของ preferences |
| updated_at | datetime | YES |  | NULL |  |  |
| updated_by | int | YES |  | NULL |  | user id ของคนที่แก้ล่าสุด |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |
| uk_pref_key | pref_key | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "id": 1,
    "pref_key": "hr_official_travel",
    "pref_value": "{\"col_visibility\":[false,true,true,true,true,true,false,false,true,false,true,false,null,true,false,true],\"sort_order\":{\"col\":0,\"dir\":\"desc\"}}",
    "updated_at": "2026-06-13 20:47:33",
    "updated_by": 253
  }
]
```
