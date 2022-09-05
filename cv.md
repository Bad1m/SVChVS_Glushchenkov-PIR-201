<img style="border-style: none; max-height: 9em; border-radius: 50%; margin-right: 2em;" id="photo" src="https://sun1.mts-by-minsk.userapi.com/s/v1/if1/NWWNhTqfuBhIsmEwyLDwBTtA46gCxgKK4_TU75LAEuN-37gl9GVkSbkE3XbFEgnUjBcPR_XC.jpg?size=200x200&quality=96&crop=320,0,1920,1920&ava=1" alt="profile picture"/>

# SVChVS_Glushchenkov-PIR-201

# Glushchenkov Vadim

# Contacts for communication:

- Cell:+375445532924
- Email: vadim600000@gmail.com;

# Brief information about yourself:

I am studying in the 3rd year at BRU as a software engineer. I want to learn new programming languages, frameworks, methodologies, development tools. I'm an enthusiastic, responsible and hard working IT person.;

# Skills:

- C#
- MSSQL
- HTML
- CSS
- JAVA

**Project experience cv:** https://github.com/Bad1m/SVChVS_Glushchenkov-PIR-201.git;

**English language level:** intermediate;

# Code

```C#
namespace BusSchedule.WEB.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class TransportController : ControllerBase
    {
        private readonly TransportContext context;

        public TransportController(TransportContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Transport>> Get()
        {
            var Transports = await context.Transports.ToListAsync();

            return Transports;
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromBody] CreateTransportRequest value)
        {
            var Transport = new Transport
            {
                TransportId = value.TransportId,
                TypeOfTransport = value.TypeOfTransport,
                Capacity = value.Capacity,
                NumberOfPassengerSeats = value.NumberOfPassengerSeats,
    };

            await context.Transports.AddAsync(Transport);
            await context.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete([FromRoute] int id)
        {
            var result = await context.Transports
                .FirstOrDefaultAsync(e => e.TransportId == id);
            if (result != null)
            {
                context.Transports.Remove(result);
                await context.SaveChangesAsync();
            }

            return null;
        }
    }
}
```
