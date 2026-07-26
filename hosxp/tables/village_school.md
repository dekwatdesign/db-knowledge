# `village_school`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_school_id | int(11) | NO | PRI | 0 |  |  |
| village_id | int(11) | YES | MUL | NULL |  |  |
| school_name | varchar(200) | YES |  | NULL |  |  |
| school_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| school_pp_type_id | int(11) | YES |  | NULL |  |  |
| f53_school_owner_code | varchar(2) | YES |  | NULL |  |  |
| f53_school_type_code | varchar(2) | YES |  | NULL |  |  |
| closed_date | date | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| gov_school_code | varchar(25) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_id | village_id | no | 1 |
| PRIMARY | village_school_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "village_school_id": 22328,
    "village_id": 1,
    "school_name": "โรงเรียนสมุทรปราการ",
    "school_type_id": 11,
    "hos_guid": "",
    "school_pp_type_id": null,
    "f53_school_owner_code": "",
    "f53_school_type_code": "",
    "closed_date": null,
    "update_datetime": null,
    "gov_school_code": ""
  },
  {
    "village_school_id": 22329,
    "village_id": 1,
    "school_name": "โรงเรียนสตรีสมุทรปราการ",
    "school_type_id": 11,
    "hos_guid": "",
    "school_pp_type_id": null,
    "f53_school_owner_code": "",
    "f53_school_type_code": "",
    "closed_date": null,
    "update_datetime": null,
    "gov_school_code": ""
  },
  {
    "village_school_id": 22330,
    "village_id": 1,
    "school_name": "โรงเรียนมัธยมวัดด่านสำโรง",
    "school_type_id": 11,
    "hos_guid": "",
    "school_pp_type_id": null,
    "f53_school_owner_code": "",
    "f53_school_type_code": "",
    "closed_date": null,
    "update_datetime": null,
    "gov_school_code": ""
  },
  {
    "village_school_id": 22331,
    "village_id": 1,
    "school_name": "โรงเรียนเทพศิรินทร์ สมุทรปราการ",
    "school_type_id": 11,
    "hos_guid": "",
    "school_pp_type_id": null,
    "f53_school_owner_code": "",
    "f53_school_type_code": "",
    "closed_date": null,
    "update_datetime": null,
    "gov_school_code": ""
  },
  {
    "village_school_id": 22332,
    "village_id": 1,
    "school_name": "โรงเรียนหาดอมราอักษรลักษณ์วิทยา",
    "school_type_id": 11,
    "hos_guid": "",
    "school_pp_type_id": null,
    "f53_school_owner_code": "",
    "f53_school_type_code": "",
    "closed_date": null,
    "update_datetime": null,
    "gov_school_code": ""
  },
  {
    "village_school_id": 22333,
    "village_id": 1,
    "school_name": "โรงเรียนนวมินทราชินูทิศ สวนกุหลาบวิทยาลัย สมุทรปราการ",
    "school_type_id": 11,
    "hos_guid": "",
    "school_pp_type_id": null,
    "f53_school_owner_code": "",
    "f53_school_type_code": "",
    "closed_date": null,
    "update_datetime": null,
    "gov_school_code": ""
  },
  {
    "village_school_id": 22334,
    "village_id": 1,
    "school_name": "โรงเรียนยุวประสาทไวทโยปถัมภ์",
    "school_type_id": 10,
    "hos_guid": "",
    "school_pp_type_id": null,
    "f53_school_owner_code": "",
    "f53_school_type_code": "",
    "closed_date": null,
    "update_datetime": null,
    "gov_school_code": ""
  },
  {
    "village_school_id": 22335,
    "village_id": 1,
    "school_name": "โรงเรียนวัดทรงธรรม",
    "school_type_id": 11,
    "hos_guid": "",
    "school_pp_type_id": null,
    "f53_school_owner_code": "",
    "f53_school_type_code": "",
    "closed_date": null,
    "update_datetime": null,
    "gov_school_code": ""
  }
]
```
