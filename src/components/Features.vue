<template>
  <div id="Features" class="four-expect-area pt-100 pb-70">
    <div class="container">
      <div class="one-section-title three-section-title">
        <span class="sub-title"># WHAT'S THE FEATURES</span>
        <h2>All About Features Of Playcourt</h2>
      </div>
      <div class="row">
        <div class="col-sm-6 col-lg-6">
          <div class="features-item">
            <div class="features-icon">
              <i class="bi bi-bag-plus"></i>
            </div>
            <h3>Self Healing</h3>
            <p>
              Restarts containers that fail, replaces and reschedules containers
              when nodes die, kills containers that don't respond to your
              user-defined health check, and doesn't advertise them to clients
              until they are ready to serve
            </p>
          </div>
        </div>
        <div class="col-sm-6 col-lg-6">
          <div class="features-item">
            <div class="features-icon">
              <i class="bi bi-box"></i>
            </div>
            <h3>Automatic Binpacking</h3>
            <p>
              Automatically places containers based on their resource
              requirements and other constraints, while not sacrificing
              availability. Mix critical and best-effort workloads in order to
              drive up utilization and save even more resources
            </p>
          </div>
        </div>
        <div class="col-sm-6 col-lg-6">
          <div class="features-item">
            <div class="features-icon">
              <i class="bi bi-rulers"></i>
            </div>
            <h3>Service Load Balancing</h3>
            <p>
              No need to modify your application to use an unfamiliar service
              discovery mechanism. Playcourt gives containers their own IP
              addresses and a single DNS name for a set of containers, and can
              load-balance across them
            </p>
          </div>
        </div>
        <div class="col-sm-6 col-lg-6">
          <div class="features-item">
            <div class="features-icon">
              <i class="bi bi-arrow-repeat"></i>
            </div>
            <h3>Automated Rollout & Rollback</h3>
            <p>
              Progressively rolls out changes to your application or its
              configuration, while monitoring application health to ensure it
              doesn't kill all your instances at the same time. If something
              goes wrong will Playcourt rollback the change
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFeatures",
};
</script>