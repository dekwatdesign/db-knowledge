# `hosguid_map`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hosguid_map_id | int(11) | NO | PRI | 0 |  |  |
| table_name | varchar(150) | YES |  | NULL |  |  |
| field_name | varchar(150) | YES |  | NULL |  |  |
| link_table_name | varchar(150) | YES |  | NULL |  |  |
| link_field_name | varchar(150) | YES |  | NULL |  |  |
| data_type | varchar(50) | YES |  | NULL |  |  |
| key_field_name1 | varchar(150) | YES |  | NULL |  |  |
| key_field_name2 | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | hosguid_map_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hosguid_map_id": 1,
    "table_name": "house",
    "field_name": "village_guid",
    "link_table_name": "village",
    "link_field_name": "hos_guid",
    "data_type": "varchar",
    "key_field_name1": "village_id",
    "key_field_name2": "village_id",
    "hos_guid": null
  },
  {
    "hosguid_map_id": 2,
    "table_name": "house",
    "field_name": "location_area_guid",
    "link_table_name": "house_location_area",
    "link_field_name": "hos_guid",
    "data_type": "varchar",
    "key_field_name1": "location_area_id",
    "key_field_name2": "location_area_id",
    "hos_guid": null
  },
  {
    "hosguid_map_id": 3,
    "table_name": "house",
    "field_name": "house_type_guid",
    "link_table_name": "house_type",
    "link_field_name": "hos_guid",
    "data_type": "varchar",
    "key_field_name1": "house_type_id",
    "key_field_name2": "house_type_id",
    "hos_guid": null
  },
  {
    "hosguid_map_id": 4,
    "table_name": "house",
    "field_name": "head_person_guid",
    "link_table_name": "person",
    "link_field_name": "hos_guid",
    "data_type": "varchar",
    "key_field_name1": "head_person_id",
    "key_field_name2": "person_id",
    "hos_guid": null
  },
  {
    "hosguid_map_id": 5,
    "table_name": "house",
    "field_name": "doctor_code_guid",
    "link_table_name": "doctor",
    "link_field_name": "doctor_guid",
    "data_type": "varchar",
    "key_field_name1": "doctor_code",
    "key_field_name2": "code",
    "hos_guid": null
  },
  {
    "hosguid_map_id": 6,
    "table_name": "village_club",
    "field_name": "village_guid",
    "link_table_name": "village",
    "link_field_name": "hos_guid",
    "data_type": "varchar",
    "key_field_name1": "village_id",
    "key_field_name2": "village_id",
    "hos_guid": null
  },
  {
    "hosguid_map_id": 7,
    "table_name": "village_club_member",
    "field_name": "village_club_guid",
    "link_table_name": "village_club",
    "link_field_name": "hos_guid",
    "data_type": "varchar",
    "key_field_name1": "village_club_id",
    "key_field_name2": "village_club_id",
    "hos_guid": null
  },
  {
    "hosguid_map_id": 8,
    "table_name": "village_club_member",
    "field_name": "person_guid",
    "link_table_name": "person",
    "link_field_name": "hos_guid",
    "data_type": "varchar",
    "key_field_name1": "person_id",
    "key_field_name2": "person_id",
    "hos_guid": null
  }
]
```
